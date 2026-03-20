# RWTable Monorepo

Deze monorepo bevat enkel de publiceerbare RWTable packages:

- `packages/rwtable-vue` -> npm package `@rudiwer/rwtable-vue`
- `packages/rwtable-laravel` -> Composer package `rudiwer/rwtable-laravel`

## Structuur

- `packages/rwtable-vue` Vue package
- `packages/rwtable-laravel` Laravel package
- `.github/workflows` split en tag mirror automation
- `scripts/split` subtree scripts voor mirrors
- `docs/rwtable-monorepo-release-blueprint.md` release handleiding

## Release 0.9.0

Voor versie `0.9.0`:

1. Push `main` van deze monorepo
2. Laat split workflow beide mirror repos syncen
3. Maak tag `v0.9.0` op deze monorepo
4. Laat tag mirror workflow de tag naar beide mirror repos sturen
5. Laat npm workflow publiceren vanuit `RUDIWER/rwtable-vue`
6. Laat Packagist updaten vanuit `RUDIWER/rwtable-laravel`

Installatie in een ander project na publicatie:

```bash
composer require rudiwer/rwtable-laravel:^0.9
npm install @rudiwer/rwtable-vue@^0.9
```
