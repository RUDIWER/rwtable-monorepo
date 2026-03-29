import test from "node:test";
import assert from "node:assert/strict";

import {
  normalizeRuleTokens,
  validateRecordWithRules,
  validateValueWithRules,
} from "../src/validation/rules.js";

test("normalizeRuleTokens supports strings and arrays", () => {
  assert.deepEqual(normalizeRuleTokens("required|string|max:10"), [
    "required",
    "string",
    "max:10",
  ]);

  assert.deepEqual(normalizeRuleTokens(["required", "email|max:255"]), [
    "required",
    "email",
    "max:255",
  ]);
});

test("validateValueWithRules validates basic scalar rules", () => {
  assert.equal(
    validateValueWithRules("", "required"),
    "This field is required.",
  );
  assert.equal(validateValueWithRules("ok", "required|string"), null);
  assert.equal(
    validateValueWithRules("abc", "numeric"),
    "This field must be a number.",
  );
  assert.equal(
    validateValueWithRules("1.5", "integer"),
    "This field must be an integer.",
  );
  assert.equal(validateValueWithRules("7", "numeric|min:5|max:9"), null);
  assert.equal(
    validateValueWithRules("3", "numeric|min:5"),
    "This field must be at least 5.",
  );
});

test("validateValueWithRules validates arrays and in-list values", () => {
  assert.equal(
    validateValueWithRules([], "required|array|min:1"),
    "This field is required.",
  );
  assert.equal(
    validateValueWithRules(["a", "b", "c"], "array|max:2"),
    "This field may not contain more than 2 items.",
  );
  assert.equal(validateValueWithRules("beta", "in:alpha,beta,gamma"), null);
  assert.equal(
    validateValueWithRules("delta", "in:alpha,beta,gamma"),
    "This field must be one of: alpha, beta, gamma.",
  );
});

test("validateValueWithRules supports regex, same and confirmed", () => {
  assert.equal(validateValueWithRules("ABC123", "regex:/^[A-Z0-9]+$/"), null);
  assert.equal(
    validateValueWithRules("abc123", "regex:/^[A-Z0-9]+$/"),
    "This field format is invalid.",
  );

  assert.equal(
    validateValueWithRules("secret", "same:password", {
      values: { password: "secret" },
    }),
    null,
  );
  assert.equal(
    validateValueWithRules("secret", "same:password", {
      values: { password: "nope" },
    }),
    "This field must match password.",
  );

  assert.equal(
    validateValueWithRules("secret", "confirmed", {
      field: "password",
      values: { password_confirmation: "secret" },
    }),
    null,
  );
  assert.equal(
    validateValueWithRules("secret", "confirmed", {
      field: "password",
      values: { password_confirmation: "different" },
    }),
    "This field confirmation does not match.",
  );
});

test("validateRecordWithRules validates full payloads", () => {
  const errors = validateRecordWithRules(
    {
      email: "invalid-email",
      age: "14",
      name: "R",
    },
    {
      email: "required|email",
      age: "required|integer|min:18",
      name: "required|string|min:2",
    },
    {
      labels: {
        email: "E-mail",
        age: "Leeftijd",
        name: "Naam",
      },
    },
  );

  assert.deepEqual(errors, {
    email: "E-mail must be a valid email address.",
    age: "Leeftijd must be at least 18.",
    name: "Naam must be at least 2 characters.",
  });
});
