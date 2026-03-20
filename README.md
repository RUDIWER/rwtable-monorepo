# RWTable Monorepo

This repository contains only the publishable RWTable packages:

- `packages/rwtable-vue` -> npm package `@rudiwer/rwtable-vue`
- `packages/rwtable-laravel` -> Composer package `rudiwer/rwtable-laravel`

## Documentation Index

Use these manuals as entry points:

- Vue package manual: [`packages/rwtable-vue/README.md`](packages/rwtable-vue/README.md)
- Laravel package manual: [`packages/rwtable-laravel/README.md`](packages/rwtable-laravel/README.md)
- Monorepo split/release manual: [`docs/rwtable-monorepo-release-blueprint.md`](docs/rwtable-monorepo-release-blueprint.md)

## Repository Structure

- `packages/rwtable-vue` Vue package source and distribution setup
- `packages/rwtable-laravel` Laravel package source
- `.github/workflows` split-sync and tag-mirror automation
- `scripts/split` subtree mirror scripts
- `docs` release and operational documentation

## Release Flow (v0.9.0)

For release `v0.9.0`:

1. Push `main` in this monorepo.
2. Let the split workflow sync both mirror repositories.
3. Create and push tag `v0.9.0` from this monorepo.
4. Let the tag mirror workflow push the same tag to both mirrors.
5. Publish npm from `RUDIWER/rwtable-vue`.
6. Let Packagist update from `RUDIWER/rwtable-laravel`.

## Installation In Another Project

After publication:

```bash
composer require rudiwer/rwtable-laravel:^0.9
npm install @rudiwer/rwtable-vue@^0.9
```
