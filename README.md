# RWTable Monorepo

RWTable is a combined package consisting of a Vue 3 table component and a server-side Laravel / Inertia action class.

The table is specifically designed for use with Vue 3 / Inertia / Laravel. The styling is based on Tailwind CSS, and a Vuetify-styled version will be available soon.  
The table itself can also be used independently of Inertia and Laravel, but Excel export and chart export currently still rely fully on Inertia.

The following features are available:

- Client- or server-side data handling
- Pagination (with configurable row counts) or endless scroll
- General search field
- Column sorting
- Config menu with adjustable table height and toggleable horizontal/vertical scrolling
- Column selection and reordering for table visibility
- Resizable column widths and column reordering
- Sticky (fixed) columns
- Per-column filtering with logical expressions
- Excel export
- Chart export (based on ECharts.js)
- Custom actions menu to add your own functionality
- Multi-language support according to Laravel standards
- Inline editing
- Column layouts with chips, icons, custom date formatting, select and autocomplete fields
- Client-side and/or server-side validation during editing
- Custom actions on column / cell click and more...

This repository contains only the publishable RWTable packages:

- `packages/rwtable-vue` -> npm package `@rudiwer/rwtable-vue`
- `packages/rwtable-laravel` -> Composer package `rudiwer/rwtable-laravel`

## Demo video

https://youtu.be/AOOwaVZxRiQ

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

## Release Flow (vX.Y.Z)

For a new release tag (example `v0.9.1`):

1. Push `main` in this monorepo.
2. Let the split workflow sync both mirror repositories.
3. Create and push tag `vX.Y.Z` from this monorepo.
4. Let the tag mirror workflow push the same tag to both mirrors.
5. Publish npm from `RUDIWER/rwtable-vue`.
6. Let Packagist update from `RUDIWER/rwtable-laravel`.

Required release secrets and token scopes are documented in:

- `docs/rwtable-monorepo-release-blueprint.md`

## Installation In a Project

After publication:

```bash
composer require rudiwer/rwtable-laravel:^0.9
npm install @rudiwer/rwtable-vue@^0.9
```
