function isEmptyValue(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string') {
        return value.trim() === '';
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    return false;
}

function toNumber(value) {
    if (typeof value === 'number') {
        return Number.isFinite(value) ? value : null;
    }

    if (typeof value === 'string') {
        const normalized = value.trim();

        if (normalized === '') {
            return null;
        }

        const parsed = Number(normalized);
        return Number.isFinite(parsed) ? parsed : null;
    }

    return null;
}

function toInteger(value) {
    const parsed = toNumber(value);

    if (parsed === null) {
        return null;
    }

    return Number.isInteger(parsed) ? parsed : null;
}

function normalizeRuleEntry(rule) {
    if (typeof rule === 'string') {
        return rule
            .split('|')
            .map((entry) => entry.trim())
            .filter((entry) => entry !== '');
    }

    return [];
}

export function normalizeRuleTokens(rules) {
    if (!rules) {
        return [];
    }

    if (Array.isArray(rules)) {
        return rules.flatMap((entry) => normalizeRuleTokens(entry));
    }

    if (typeof rules === 'string') {
        return normalizeRuleEntry(rules);
    }

    return [];
}

function parseRuleToken(token) {
    const [name, ...parameterParts] = String(token).split(':');

    return {
        name: String(name || '')
            .trim()
            .toLowerCase(),
        parameters: parameterParts
            .join(':')
            .split(',')
            .map((part) => part.trim()),
    };
}

function messageForRule(ruleName, fieldLabel, parameters = []) {
    const field = fieldLabel || 'Dit veld';

    if (ruleName === 'required') {
        return `${field} is verplicht.`;
    }

    if (ruleName === 'string') {
        return `${field} moet tekst zijn.`;
    }

    if (ruleName === 'numeric') {
        return `${field} moet een getal zijn.`;
    }

    if (ruleName === 'integer') {
        return `${field} moet een geheel getal zijn.`;
    }

    if (ruleName === 'boolean') {
        return `${field} moet een geldige ja/nee waarde zijn.`;
    }

    if (ruleName === 'array') {
        return `${field} moet een lijst zijn.`;
    }

    if (ruleName === 'min') {
        return `${field} moet minimaal ${parameters[0] ?? 0} zijn.`;
    }

    if (ruleName === 'max') {
        return `${field} mag maximaal ${parameters[0] ?? 0} zijn.`;
    }

    if (ruleName === 'in') {
        return `Kies een geldige waarde voor ${field.toLowerCase()}.`;
    }

    return `${field} is ongeldig.`;
}

function hasToken(tokens, name) {
    return tokens.some((token) => parseRuleToken(token).name === name);
}

function validateMinOrMax(name, value, parameters, tokens, fieldLabel) {
    const limit = toNumber(parameters[0]);

    if (limit === null) {
        return null;
    }

    const numericExpected =
        hasToken(tokens, 'numeric') || hasToken(tokens, 'integer');
    const arrayExpected = hasToken(tokens, 'array');

    if (arrayExpected) {
        if (!Array.isArray(value)) {
            return null;
        }

        const length = value.length;

        if (name === 'min' && length < limit) {
            return messageForRule(name, fieldLabel, [limit]);
        }

        if (name === 'max' && length > limit) {
            return messageForRule(name, fieldLabel, [limit]);
        }

        return null;
    }

    if (numericExpected) {
        const numberValue = toNumber(value);

        if (numberValue === null) {
            return null;
        }

        if (name === 'min' && numberValue < limit) {
            return messageForRule(name, fieldLabel, [limit]);
        }

        if (name === 'max' && numberValue > limit) {
            return messageForRule(name, fieldLabel, [limit]);
        }

        return null;
    }

    const length = String(value ?? '').length;

    if (name === 'min' && length < limit) {
        return messageForRule(name, fieldLabel, [limit]);
    }

    if (name === 'max' && length > limit) {
        return messageForRule(name, fieldLabel, [limit]);
    }

    return null;
}

export function validateValueWithRules(value, rules, options = {}) {
    const tokens = normalizeRuleTokens(rules);

    if (tokens.length === 0) {
        return null;
    }

    const fieldLabel = options.fieldLabel || 'Dit veld';
    const emptyValue = isEmptyValue(value);
    const required = hasToken(tokens, 'required');
    const nullable = hasToken(tokens, 'nullable');

    if (emptyValue) {
        if (required) {
            return messageForRule('required', fieldLabel);
        }

        if (nullable || !required) {
            return null;
        }
    }

    for (const token of tokens) {
        const { name, parameters } = parseRuleToken(token);

        if (name === '' || name === 'required' || name === 'nullable') {
            continue;
        }

        if (name === 'string' && typeof value !== 'string') {
            return messageForRule(name, fieldLabel);
        }

        if (name === 'numeric' && toNumber(value) === null) {
            return messageForRule(name, fieldLabel);
        }

        if (name === 'integer' && toInteger(value) === null) {
            return messageForRule(name, fieldLabel);
        }

        if (name === 'boolean') {
            const normalized = String(value).trim().toLowerCase();
            const boolLike =
                typeof value === 'boolean' ||
                normalized === '1' ||
                normalized === '0' ||
                normalized === 'true' ||
                normalized === 'false';

            if (!boolLike) {
                return messageForRule(name, fieldLabel);
            }
        }

        if (name === 'array' && !Array.isArray(value)) {
            return messageForRule(name, fieldLabel);
        }

        if (name === 'min' || name === 'max') {
            const minMaxMessage = validateMinOrMax(
                name,
                value,
                parameters,
                tokens,
                fieldLabel,
            );

            if (minMaxMessage) {
                return minMaxMessage;
            }
        }

        if (name === 'in') {
            const allowed = parameters.map((entry) => String(entry));

            if (!allowed.includes(String(value))) {
                return messageForRule(name, fieldLabel);
            }
        }
    }

    return null;
}
