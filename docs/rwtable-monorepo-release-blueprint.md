# RWTable Monorepo Release Blueprint

This playbook describes how to keep one internal monorepo while publishing two installable packages:

- `@rudiwer/rwtable-vue` (npm)
- `rudiwer/rwtable-laravel` (Packagist)

## 1) One-time decisions

- Mirror repositories:
    - `RUDIWER/rwtable-vue`
    - `RUDIWER/rwtable-laravel`
- Version policy:
    - keep same `major.minor` for both packages
- Visibility and license:
    - align legal and repository settings before first public release

## 2) Monorepo automation (already included)

Workflows in this repository:

- `.github/workflows/rwtable-split-sync.yml`
    - on push to `main`
    - splits and force-pushes:
        - `packages/rwtable-vue` -> `RUDIWER/rwtable-vue:main`
        - `packages/rwtable-laravel` -> `RUDIWER/rwtable-laravel:main`

- `.github/workflows/rwtable-mirror-tags.yml`
    - on tag push `v*`
    - mirrors the same tag to both package repositories

Scripts used by workflows:

- `scripts/split/sync-mirrors.sh`
- `scripts/split/mirror-tag.sh`

## 3) Required secrets

In the monorepo GitHub settings, create:

- `RWTABLE_MIRROR_TOKEN`
    - Personal Access Token (classic or fine-grained)
    - needs write access to:
        - `RUDIWER/rwtable-vue`
        - `RUDIWER/rwtable-laravel`

## 4) Mirror repository setup

## 4.1 `RUDIWER/rwtable-vue`

Create `.github/workflows/release-npm.yml`:

```yaml
name: Release to npm

on:
    push:
        tags:
            - 'v*'

jobs:
    publish:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: 20
                  registry-url: 'https://registry.npmjs.org'
            - run: npm ci
            - run: npm run build
            - run: npm publish --access public
              env:
                  NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add secret in `rwtable-vue` mirror repo:

- `NPM_TOKEN`

## 4.2 `RUDIWER/rwtable-laravel`

Packagist setup:

1. Register `rudiwer/rwtable-laravel` package at Packagist
2. Link the GitHub mirror repository
3. Configure Packagist webhook for auto-update on push/tag

Optional check workflow in mirror repo (`.github/workflows/ci.yml`):

```yaml
name: Laravel Package CI

on: [push, pull_request]

jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: shivammathur/setup-php@v2
              with:
                  php-version: '8.3'
            - run: composer install --no-interaction --prefer-dist
```

## 5) Tag and release flow

Recommended process:

1. Merge release-ready code to monorepo `main`
2. Bump versions/changelogs
3. Create and push tag in monorepo (e.g. `v1.2.0`)
4. Monorepo `rwtable-mirror-tags` workflow pushes same tag to both mirrors
5. Vue mirror publishes to npm via tag workflow
6. Laravel mirror is picked up by Packagist via webhook

## 6) Versioning policy

- Keep same `major.minor` across both packages:
    - `rwtable-vue` `1.2.x`
    - `rwtable-laravel` `1.2.x`
- Patch version can differ only when absolutely necessary
- Avoid releasing one package with a breaking change without matching major bump in both docs

## 7) Release checklist (every release)

- [ ] Version bump completed
- [ ] Changelog updated
- [ ] `npm run build` green
- [ ] Relevant tests green
- [ ] Docs links and install commands checked
- [ ] Tag created and pushed
- [ ] npm package visible
- [ ] Packagist package updated

## 8) Beginner docs alignment

Keep both manuals synchronized on:

- quick start production install
- advanced local path install
- managed vs manual server mode
- manual infinite append behavior in parent orchestration
