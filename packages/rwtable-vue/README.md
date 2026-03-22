# RWTable Documentation

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

Comprehensive guide for the RWTable ecosystem:

- **Client package**: `@rudiwer/rwtable-vue` (Coming soon rwtable-vuetify)
- **Server package**: `rudiwer/rwtable-laravel`

Backend-only deep dive is available at:

- `packages/rwtable-laravel/README.md`
- monorepo split/release blueprint: `docs/rwtable-monorepo-release-blueprint.md`

## Demo video

https://youtu.be/AOOwaVZxRiQ

## Table of Contents

1. [Architecture](#architecture)
2. [Framework Requirements](#framework-requirements)
3. [Installation](#installation)
4. [Client-Side (Vue) API](#client-side-vue-api)
5. [Column Definition API (Complete)](#column-definition-api-complete)
6. [Event API](#event-api)
7. [Keyboard Behavior](#keyboard-behavior)
8. [Validation Model](#validation-model)
9. [Managed Data Protocol (Client <-> Server)](#managed-data-protocol-client---server)
10. [Server Modes In Depth (Managed vs Manual)](#server-modes-in-depth-managed-vs-manual)
11. [Charts and Excel Modules](#charts-and-excel-modules)
12. [Server-Side (Laravel) API](#server-side-laravel-api)
13. [Database Schema](#database-schema)
14. [Internationalization (i18n)](#internationalization-i18n)
15. [End-to-End Examples](#end-to-end-examples)
16. [Troubleshooting](#troubleshooting)

---

## Architecture

RWTable is split into two independent layers:

(Both layers can be used separately, but full feature parity requires both.)

1. **Client layer (`@rudiwer/rwtable-vue`)**
   - Vue 3 table component
   - filtering, sorting, infinite scroll
   - inline edit/create/delete
   - chart and excel config UIs
   - keyboard navigation
   - multi-select autocomplete with chips

2. **Server layer (`rudiwer/rwtable-laravel`)**
   - reusable Laravel actions for table data operations
   - persisted chart/export configurations per user + table identifier
   - route registration and validation
   - translation namespace loading and publishing

---

## Framework Requirements

### Minimum supported versions (current package constraints)

| Layer                       | Minimum                                  |
| --------------------------- | ---------------------------------------- |
| PHP                         | `8.3`                                    |
| Laravel                     | `13.0`                                   |
| `inertiajs/inertia-laravel` | `2.0 (stable) or 3.0 beta`               |
| Vue                         | `3.4`                                    |
| `@inertiajs/vue3`           | `2.0`                                    |
| Tailwind CSS                | `3.2` (recommended for intended styling) |

Notes:

- Laravel 10 is **not** supported by the current package constraints.
- Tailwind CSS is not a strict runtime dependency for logic, but it is strongly recommended for correct visual rendering.

### Client package (`@rudiwer/rwtable-vue`)

From `packages/rwtable-vue/package.json`:

| Type           | Package           | Version    |
| -------------- | ----------------- | ---------- |
| peerDependency | `vue`             | `^3.4.0`   |
| peerDependency | `@inertiajs/vue3` | `^2.0.0`   |
| dependency     | `lodash`          | `^4.17.21` |
| dependency     | `echarts`         | `^5.6.0`   |
| dependency     | `echarts-gl`      | `^2.0.9`   |
| dependency     | `exceljs`         | `^4.4.0`   |
| dependency     | `html2pdf.js`     | `^0.14.0`  |

### Server package (`rudiwer/rwtable-laravel`)

From `packages/rwtable-laravel/composer.json`:

| Type    | Package                     | Version |
| ------- | --------------------------- | ------- | --- | ---------- |
| require | `php`                       | `^8.3`  |
| require | `illuminate/database`       | `^13.0` |
| require | `illuminate/http`           | `^13.0` |
| require | `illuminate/support`        | `^13.0` |
| require | `inertiajs/inertia-laravel` | `^2.0   |     | ^3.0@beta` |

---

## Installation

### Quick Start (production install)

```bash
composer require rudiwer/rwtable-laravel:^x.y
npm install @rudiwer/rwtable-vue@^x.y
php artisan vendor:publish --tag=rwtable-config --tag=rwtable-migrations --tag=rwtable-lang
php artisan migrate
```

Use matching major/minor versions for both packages (`x.y`).

### Maintainer local development (optional)

### 1) Install client package

```bash
npm install @rudiwer/rwtable-vue
```

Path/workspace example:

```json
{
  "dependencies": {
    "@rudiwer/rwtable-vue": "file:../packages/rwtable-vue"
  }
}
```

Import and use:

```vue
<script setup>
import { RwTable } from "@rudiwer/rwtable-vue";

const tableData = { data: [], total: 0 };
const columns = [{ key: "id", label: "ID", type: "number" }];
</script>

<template>
  <RwTable :data="tableData" :columns="columns" />
</template>
```

Import RWTable CSS once in your app entry (or wrapper component):

```js
import "@rudiwer/rwtable-vue/dist/rwtable-vue.css";
```

### 2) Install server package (optional for full stack testing)

```bash
composer require rudiwer/rwtable-laravel
```

Development (path repository) example:

```json
{
  "repositories": [
    {
      "type": "path",
      "url": "../packages/rwtable-laravel",
      "options": { "symlink": true }
    }
  ]
}
```

Publish assets:

```bash
php artisan vendor:publish --tag=rwtable-config
php artisan vendor:publish --tag=rwtable-migrations
php artisan vendor:publish --tag=rwtable-lang
```

Run migrations:

```bash
php artisan migrate
```

### 3) Configure server package

`config/rwtable.php`:

```php
return [
    'routes' => [
        'enabled' => true,
        'prefix' => 'admin',
        'name_prefix' => 'admin.',
        'middleware' => ['web', 'auth'],
    ],
    'field_aliases' => [],
    'security' => [
        'allowed_field_pattern' => '/^[A-Za-z0-9_\.]+$/',
    ],
];
```

### 4) Tailwind / bundler note

If you consume RWTable from a package path, ensure your CSS pipeline scans package Vue files, otherwise utility classes may not compile.

---

## Client-Side (Vue) API

### `RwTable` props

Source: `packages/rwtable-vue/src/RwTable.vue`.

| Prop                        | Type               | Default                 | Description                                                  |
| --------------------------- | ------------------ | ----------------------- | ------------------------------------------------------------ |
| `data`                      | `Object`           | required                | Table payload object (`{ data, total, ... }`)                |
| `columns`                   | `Array`            | required                | Column definitions                                           |
| `tableId`                   | `String`           | `null`                  | Persistent table identity for localStorage and config scopes |
| `idKey`                     | `String`           | `'id'`                  | Primary key field in row objects                             |
| `initialHeight`             | `String`           | `'520px'`               | Initial table body height                                    |
| `horizontalScroll`          | `Boolean`          | `true`                  | Enable horizontal overflow handling                          |
| `checkboxColumn`            | `Boolean`          | `false`                 | Adds selection checkbox column                               |
| `checkedRows`               | `Array`            | `[]`                    | Controlled selected row ids (`v-model:checkedRows`)          |
| `globalSearch`              | `Boolean`          | `true`                  | Show global search input                                     |
| `searchFieldWidth`          | `String\|Number`   | `null`                  | Search input fixed width                                     |
| `searchFieldMinWidth`       | `String\|Number`   | `null`                  | Search input min-width                                       |
| `showRecordCount`           | `Boolean`          | `true`                  | Show total row count in footer                               |
| `rowQuantitySelect`         | `Boolean`          | `true`                  | Show rows-per-page selector                                  |
| `rowOptions`                | `Array`            | `[10,25,50,100]`        | Rows-per-page options                                        |
| `menuItems`                 | `Array`            | `[]`                    | Toolbar menu actions                                         |
| `inlineUpdateRoute`         | `String\|Function` | `null`                  | Inline PATCH endpoint resolver                               |
| `inlineDeleteRoute`         | `String\|Function` | `null`                  | Inline DELETE endpoint resolver                              |
| `beforeInlineDelete`        | `Function`         | `null`                  | Hook before delete request                                   |
| `charts`                    | `String`           | `'false'`               | Enable chart module (`'true'`)                               |
| `excel`                     | `String`           | `'false'`               | Enable excel module (`'true'`)                               |
| `cellStyle`                 | `Function`         | `null`                  | Dynamic inline style resolver per cell                       |
| `cellClass`                 | `Function`         | `null`                  | Dynamic class resolver per cell                              |
| `startOnMount`              | `Boolean`          | `true`                  | Auto-load on mount in managed mode                           |
| `initialData`               | `Object`           | `null`                  | Seed data before first request                               |
| `autoEditLastRowFirstField` | `Boolean`          | `false`                 | Auto-enter edit mode on mount (last row)                     |
| `inlineCreate`              | `Boolean`          | `false`                 | Enable inline create row                                     |
| `inlineCreateRoute`         | `String\|Function` | `null`                  | Inline create POST endpoint resolver                         |
| `inlineCreateButton`        | `Boolean`          | `false`                 | Show inline-create button in toolbar                         |
| `inlineCreateDefaults`      | `Object\|Function` | `{}`                    | Default payload fields for create                            |
| `manualOrdering`            | `Boolean`          | `false`                 | Use manual ordering model                                    |
| `manualOrderField`          | `String`           | `'index'`               | Order field name for manual ordering                         |
| `rowMenu`                   | `Boolean`          | `false`                 | Enable row context menu                                      |
| `rowMenuItems`              | `Array\|Function`  | `null`                  | Override default row menu items                              |
| `managed`                   | `Boolean`          | `false`                 | Enable RWTable-managed data requests                         |
| `serverSide`                | `Boolean`          | `false`                 | Parent-managed server mode (`@change`)                       |
| `dataSource`                | `Object`           | inertia config          | Request source config (`inertia` or `axios`)                 |
| `urlSync`                   | `String`           | `'auto'`                | URL query sync strategy                                      |
| `columnsParamMode`          | `String`           | `'full'`                | Columns payload mode (`full`, `keys`, `none`)                |
| `paramMap`                  | `Object`           | default map             | Request key mapping                                          |
| `responseMap`               | `Object`           | default map             | Response key mapping                                         |
| `options`                   | `Object`           | `{}`                    | Extra behavior options (incl. infinite mode config)          |
| `sortField`                 | `String`           | `'id'`                  | Initial sort field                                           |
| `sortOrder`                 | `String`           | `'asc'`                 | Initial sort order                                           |
| `i18n`                      | `Object`           | `{}`                    | Locale/message overrides for frontend labels                 |
| `validationMode`            | `String`           | `'both'`                | `client`, `server`, or `both`                                |
| `clientValidationOn`        | `Array\|String`    | `['tab','blur','save']` | Client validation trigger list                               |
| `validationAdapter`         | `Function`         | `null`                  | Global client validation adapter                             |

### `dataSource` configuration

```js
{
  type: 'inertia', // 'inertia' | 'axios'
  path: '/admin/my-endpoint',
  method: 'get',   // 'get' | 'post'
  data: null,      // inertia prop key (optional)
  params: {},      // extra static params
  preserve: true,  // inertia preserve behavior
}
```

### `paramMap` default

```js
{
  page: 'page',
  rowsPerPage: 'rowsPerPage',
  sortField: 'sortField',
  sortOrder: 'sortOrder',
  global: 'global',
  columns: 'columns',
  filters: 'filters',
  filterModes: 'filterModes',
  filterTypes: 'filterTypes',
  selectionFilter: 'selectionFilter',
  selectedRowIds: 'selectedRowIds',
  manualOrdering: 'manualOrdering',
  manualOrderField: 'manualOrderField',
}
```

### `responseMap` default

```js
{
  data: 'data',
  total: 'total',
  current: 'current_page',
  last: 'last_page',
}
```

### Toolbar 3-dot menu (top-right)

Use `menuItems` to show the top-right toolbar menu and hook custom actions:

```js
const menuItems = [
  { key: "exportSelection", label: "Export selection", icon: "mdi-download" },
  { key: "bulkArchive", label: "Archive selected", icon: "mdi-archive" },
  { key: "logContext", label: "Log context", icon: "mdi-console" },
];
```

When a user clicks a toolbar menu item, RWTable emits `on-menu-item-click` with full table context:

```js
{
  item,
  filters,
  filterModes,
  filterTypes,
  global,
  selectionFilter,
  selectedRowIds,
  sortField,
  sortOrder,
  page,
  rowsPerPage,
}
```

Practical handler example:

```js
function onToolbarMenuItemClick(payload) {
  if (payload?.item?.key === "logContext") {
    console.log("RWTable toolbar payload", payload);
    return;
  }

  if (payload?.item?.key === "exportSelection") {
    // Use payload.filters + payload.sortField + payload.selectedRowIds
    // to call your own export endpoint.
  }
}
```

### Practical full prop example (`RwTable`)

Use this as a copy/paste reference when you want to see all major props in one place.

```vue
<script setup>
import { RwTable } from "@rudiwer/rwtable-vue";

const rows = {
  data: [],
  total: 0,
  current_page: 1,
  last_page: 1,
};

const columns = [];
const checkedRows = [];

function validationAdapter({ value, rules, column, row, trigger }) {
  if (
    column?.key === "title" &&
    trigger === "save" &&
    String(value || "").trim() === ""
  ) {
    return "Title is required.";
  }

  return null;
}

function beforeInlineDelete({ id, row }) {
  if (row?.is_locked) {
    return { proceed: false };
  }

  return { proceed: true, payload: { hard_delete: false } };
}
</script>

<template>
  <RwTable
    :data="rows"
    :columns="columns"
    table-id="admin-rwtable-full-reference"
    id-key="id"
    initial-height="calc(100vh - 280px)"
    :horizontal-scroll="true"
    :checkbox-column="true"
    v-model:checkedRows="checkedRows"
    :global-search="true"
    search-field-width="25%"
    search-field-min-width="220px"
    :show-record-count="true"
    :row-quantity-select="true"
    :row-options="[10, 25, 50, 100]"
    :menu-items="[
      {
        key: 'exportSelection',
        label: 'Export selection',
        icon: 'mdi-download',
      },
      {
        key: 'bulkArchive',
        label: 'Archive selected',
        icon: 'mdi-archive',
      },
    ]"
    inline-update-route="/admin/tasks/:id/inline"
    :inline-delete-route="(id) => `/admin/tasks/${id}`"
    :before-inline-delete="beforeInlineDelete"
    charts="true"
    excel="true"
    :cell-style="
      ({ row, col }) => (row?.is_active === false ? { opacity: 0.7 } : null)
    "
    :cell-class="({ col }) => (col.key === 'priority' ? 'font-medium' : null)"
    :start-on-mount="true"
    :initial-data="rows"
    :auto-edit-last-row-first-field="false"
    :inline-create="true"
    :inline-create-route="() => '/admin/tasks/inline-create'"
    :inline-create-button="true"
    :inline-create-defaults="{ status: 'todo', is_active: true }"
    :manual-ordering="false"
    manual-order-field="sort_index"
    :row-menu="true"
    :row-menu-items="
      (row) => [
        { key: 'edit', label: 'Edit', icon: 'mdi-pencil' },
        {
          key: 'insertAbove',
          label: 'Insert above',
          icon: 'mdi-arrow-up',
        },
        { key: 'insert', label: 'New row', icon: 'mdi-plus' },
        {
          key: 'delete',
          label: 'Delete',
          icon: 'mdi-delete',
          color: 'red',
        },
        {
          key: 'customAction',
          label: 'Custom action',
          icon: 'mdi-star',
          disabled: !!row?.is_locked,
        },
      ]
    "
    :managed="true"
    :server-side="false"
    :data-source="{
      type: 'axios',
      path: '/admin/tasks/data',
      method: 'get',
      data: null,
      params: () => ({ context: 'rwtable-docs' }),
      preserve: true,
    }"
    url-sync="none"
    columns-param-mode="full"
    :param-map="{
      page: 'page',
      rowsPerPage: 'rowsPerPage',
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      global: 'global',
      columns: 'columns',
      filters: 'filters',
      filterModes: 'filterModes',
      filterTypes: 'filterTypes',
      selectionFilter: 'selectionFilter',
      selectedRowIds: 'selectedRowIds',
      manualOrdering: 'manualOrdering',
      manualOrderField: 'manualOrderField',
    }"
    :response-map="{
      data: 'data',
      total: 'total',
      current: 'current_page',
      last: 'last_page',
    }"
    :options="{
      scrollMode: 'infinite',
      infinite: {
        rootMargin: '220px',
        resetOnSort: true,
        sortJumpMode: 'first',
      },
    }"
    sort-field="id"
    sort-order="asc"
    :i18n="{
      locale: 'en',
      messages: {
        actions: { back: 'Back', save: 'Save' },
        columns: { title: 'Title', status: 'Status' },
      },
    }"
    validation-mode="both"
    :client-validation-on="['tab', 'blur', 'save']"
    :validation-adapter="validationAdapter"
    @on-cell-click="(field, id, value) => console.log('cell', field, id, value)"
    @on-menu-item-click="(payload) => console.log('toolbar', payload)"
    @on-row-menu-item-click="(payload) => console.log('row-menu', payload)"
    @change="(payload) => console.log('server-change', payload)"
    @update:checkedRows="(ids) => console.log('checkedRows', ids)"
  />
</template>
```

### `RwAutocompleteInput` props (internal editor component)

Source: `packages/rwtable-vue/src/components/RwAutocompleteInput.vue`.

| Prop                     | Type                                     | Default                   | Description                                          |
| ------------------------ | ---------------------------------------- | ------------------------- | ---------------------------------------------------- |
| `modelValue`             | `String\|Number\|Boolean\|Object\|Array` | `null`                    | Current selected value(s)                            |
| `items`                  | `Array`                                  | `[]`                      | Option list                                          |
| `itemTitle`              | `String\|Function`                       | `'title'`                 | Option title resolver                                |
| `itemValue`              | `String\|Function`                       | `'value'`                 | Option value resolver                                |
| `searchFields`           | `Array`                                  | `[]`                      | Additional fields to include in search               |
| `displayValue`           | `String\|Number\|Array`                  | `null`                    | Display text/value bridge                            |
| `allowCustom`            | `Boolean`                                | `false`                   | Allow non-listed custom value                        |
| `customTrim`             | `Boolean`                                | `true`                    | Trim custom input                                    |
| `customMinLength`        | `Number`                                 | `0`                       | Min custom value length                              |
| `name`                   | `String`                                 | `''`                      | Input name                                           |
| `ariaLabel`              | `String`                                 | `''`                      | Accessibility label                                  |
| `dataCreateField`        | `String`                                 | `''`                      | RWTable create-row field marker                      |
| `invalid`                | `Boolean`                                | `false`                   | Error state flag                                     |
| `errorMessage`           | `String`                                 | `''`                      | Tooltip error text                                   |
| `requiredMissing`        | `Boolean`                                | `false`                   | Required highlight state                             |
| `requiredHighlightColor` | `String`                                 | `rgba(59, 130, 246, 0.1)` | Required highlight color                             |
| `disabled`               | `Boolean`                                | `false`                   | Disabled state                                       |
| `multiple`               | `Boolean`                                | `false`                   | Enable multi select                                  |
| `showCheckboxes`         | `Boolean`                                | `false`                   | Show checkbox list in menu                           |
| `selectionChips`         | `Boolean`                                | `true`                    | Render selected items as chips                       |
| `maxSelectionChips`      | `Number`                                 | `3`                       | Max visible selected chips before overflow indicator |
| `closeOnSelect`          | `Boolean`                                | `true`                    | Close menu after select                              |
| `messages`               | `Object`                                 | `{}`                      | i18n message object                                  |

Practical full usage example:

```vue
<RwAutocompleteInput
  v-model="form.tags"
  :items="tagOptions"
  item-title="title"
  item-value="value"
  :search-fields="['title', 'value']"
  :display-value="null"
  :allow-custom="true"
  :custom-trim="true"
  :custom-min-length="2"
  name="tags"
  aria-label="Select tags"
  data-create-field="tags"
  :invalid="Boolean(errors.tags)"
  :error-message="errors.tags || ''"
  :required-missing="false"
  required-highlight-color="rgba(255, 0, 0, 0.08)"
  :disabled="false"
  :multiple="true"
  :show-checkboxes="true"
  :selection-chips="true"
  :max-selection-chips="5"
  :close-on-select="false"
  :messages="{
    autocomplete: {
      more: 'more',
      no_results: 'No results',
      use_custom_value: 'Use custom value:',
    },
  }"
  @update:modelValue="
    (value) => {
      form.tags = value;
    }
  "
  @resolve="(payload) => console.log('resolve', payload)"
  @blur="() => console.log('blur')"
  @focus="() => console.log('focus')"
  @keydown="(event) => console.log('keydown', event.key)"
/>
```

Exposed methods:

- `focus()`
- `select()`
- `scrollIntoView(options)`

---

## Column Definition API (Complete)

`columns` drives rendering, filtering, editing, validation, i18n labels, and behavior.

### Core column fields

| Key                 | Type      | Description                                                     |
| ------------------- | --------- | --------------------------------------------------------------- |
| `key`               | `String`  | Row field key                                                   |
| `label`             | `String`  | Fallback header label                                           |
| `labelKey`          | `String`  | i18n key under `vue.columns.*` (preferred)                      |
| `labelTranslations` | `Object`  | Per-locale inline labels (`{ en, nl, fr, de, default }`)        |
| `type`              | `String`  | `text`, `number`, `date`, `datetime`, `boolean`, `icon`, `chip` |
| `width`             | `Number`  | Initial width                                                   |
| `align`             | `String`  | Alignment (left/right/center behavior)                          |
| `selected`          | `Boolean` | Initial visibility                                              |
| `sortable`          | `Boolean` | Disable sorting with `false`                                    |
| `filterable`        | `Boolean` | Enables filter popup                                            |
| `clickable`         | `Boolean` | Emits `on-cell-click` on click                                  |
| `aria`              | `Object`  | Optional a11y labels/metadata                                   |

### Inline edit/create fields

| Key                  | Type      | Description                                                |
| -------------------- | --------- | ---------------------------------------------------------- |
| `editable`           | `Boolean` | Cell editable                                              |
| `editField`          | `String`  | Backend field name (different from display key)            |
| `filterField`        | `String`  | Field used for option-based filtering payload              |
| `editInput`          | `String`  | `select` or `autocomplete`                                 |
| `editItems`          | `Array`   | Select/autocomplete options                                |
| `filterItems`        | `Array`   | Optional dedicated option source for filter popup          |
| `editItemTitle`      | `String`  | Label field in `editItems` (default `title`)               |
| `editItemValue`      | `String`  | Value field in `editItems` (default `value`)               |
| `filterItemTitle`    | `String`  | Label field in `filterItems` (fallback `editItemTitle`)    |
| `filterItemValue`    | `String`  | Value field in `filterItems` (fallback `editItemValue`)    |
| `filterInput`        | `String`  | Force filter input type (`autocomplete` or default select) |
| `editSearchFields`   | `Array`   | Extra searchable fields for autocomplete                   |
| `editDisplayFields`  | `Object`  | Map of display fields to update from selected option       |
| `defaultInsertValue` | `Mixed`   | Pre-filled value in create row                             |

### Multi-select autocomplete fields

| Key                     | Type      | Description                     |
| ----------------------- | --------- | ------------------------------- |
| `editMultiple`          | `Boolean` | Enable multi-value selection    |
| `editShowCheckboxes`    | `Boolean` | Show checkbox list in dropdown  |
| `editSelectionChips`    | `Boolean` | Show selected chips             |
| `editMaxSelectionChips` | `Number`  | Max visible chips before `+N`   |
| `editCloseOnSelect`     | `Boolean` | Close menu after each selection |

### Custom autocomplete value fields

| Key                              | Type      | Description                                        |
| -------------------------------- | --------- | -------------------------------------------------- |
| `editAutocompleteAllowCustom`    | `Boolean` | Allow free text custom value                       |
| `editCustomTrim`                 | `Boolean` | Trim custom value before commit                    |
| `editCustomMinLength`            | `Number`  | Minimum custom length                              |
| `editCustomField`                | `String`  | Additional custom text field                       |
| `editCustomSentinelField`        | `String`  | Sentinel/toggle field name                         |
| `editCustomSentinelValue`        | `Mixed`   | Sentinel value when custom selected                |
| `editCustomClearOnSelect`        | `Boolean` | Clear custom field when predefined option selected |
| `editCustomResetValueOnSelect`   | `Mixed`   | Explicit reset value for custom field              |
| `editCustomPrimaryValueOnCustom` | `Mixed`   | Primary value when custom path chosen              |

### Validation fields

| Key                                 | Type            | Description                              |
| ----------------------------------- | --------------- | ---------------------------------------- |
| `required`                          | `Boolean`       | Required fallback validation             |
| `validationType`                    | `String`        | `model` or `client`                      |
| `validationRules`                   | `String\|Array` | Validation rules for client flow         |
| `clientValidate`                    | `Function`      | Per-column validation adapter            |
| `clientValidationOn`                | `Array\|String` | Per-column trigger overrides             |
| `requiredHighlightColor`            | `String`        | Visual required highlight color          |
| `editExtraValidationRules`          | `Object`        | Validation rules for extra update fields |
| `editCustomFieldValidationRules`    | `String\|Array` | Rules for `editCustomField`              |
| `editCustomSentinelValidationRules` | `String\|Array` | Rules for sentinel field                 |

### Select/resolve side effects

| Key                      | Type     | Description                                    |
| ------------------------ | -------- | ---------------------------------------------- |
| `editSelectExtraUpdates` | `Object` | Additional fields updated on selection resolve |

### Boolean fields

| Key                 | Type     | Description                      |
| ------------------- | -------- | -------------------------------- |
| `booleanLabels`     | `Object` | `{ true, false }` display labels |
| `booleanTrueLabel`  | `String` | Fallback true label              |
| `booleanFalseLabel` | `String` | Fallback false label             |

### Icon/chip rendering fields

| Key                | Type       | Description                     |
| ------------------ | ---------- | ------------------------------- |
| `iconValue`        | `Function` | Resolve icon state value        |
| `iconMap`          | `Object`   | Icon map by state value         |
| `iconColorMap`     | `Object`   | Icon color map by state value   |
| `colorKey`         | `String`   | Row field for chip color        |
| `chipPrependIcon`  | `String`   | Optional icon before chip label |
| `chipDefaultColor` | `String`   | Fallback chip color             |

### Date/datetime display fields

| Key                   | Type     | Description                                                                 |
| --------------------- | -------- | --------------------------------------------------------------------------- |
| `dateDisplayFormat`   | `String` | Optional display pattern for `date`/`datetime` columns (`dd/MM/yyyy HH:mm`) |
| `dateDisplayFallback` | `String` | Optional fallback text when value cannot be parsed (default `-`)            |
| `dateAssumeTimezone`  | `String` | Parsing mode for timezone-less values: `auto` (default), `local`, `utc`     |

Supported pattern tokens:

- `dd`, `d`
- `MM`, `M`
- `yyyy`, `yy`
- `HH`, `H`
- `mm`, `m`
- `ss`, `s`

Date formatting is only applied when `dateDisplayFormat` is present on the column.
Without `dateDisplayFormat`, RWTable keeps existing behavior and returns the raw value.

Practical recipes:

```js
// Date only (from datetime source)
{
  key: "created_at",
  type: "date",
  dateDisplayFormat: "dd/MM/yyyy",
  dateAssumeTimezone: "local",
}

// Time only
{
  key: "created_time",
  type: "datetime",
  dateDisplayFormat: "HH:mm",
  dateAssumeTimezone: "local",
}

// Date + time with seconds
{
  key: "updated_at",
  type: "datetime",
  dateDisplayFormat: "dd/MM/yy HH:mm:ss",
  dateDisplayFallback: "No date/time",
  dateAssumeTimezone: "local",
}

// Force UTC interpretation for timezone-less values
{
  key: "sent_at",
  type: "datetime",
  dateDisplayFormat: "dd/MM/yyyy HH:mm",
  dateAssumeTimezone: "utc",
}
```

### Filter operators for option columns

For columns that use `editInput: "select"` or `editInput: "autocomplete"`, RWTable can render option-aware operators in the filter popup.

| Operator value    | UI label        | Behavior                                                                           |
| ----------------- | --------------- | ---------------------------------------------------------------------------------- |
| `option_contains` | Contains option | Single value: contains match. Multi-value: ALL selected options must be present.   |
| `option_equals`   | Equals option   | Single value: exact value. Multi-value: exact set match (no missing/extra values). |

Notes:

- RWTable automatically switches the filter input between free text and option list based on selected operator.
- Option filters prefer `filterField`, then `editField`, then column `key`.
- Option lists prefer `filterItems`, then `editItems`, then derived unique values from current rows.
- For `editMultiple === true`, use checkbox list/chips via existing autocomplete props (`editShowCheckboxes`, `editSelectionChips`, `editCloseOnSelect`, ...).

### Practical full column object (all keys)

```js
const columns = [
  {
    // core
    key: "title",
    label: "Title",
    labelKey: "title",
    labelTranslations: {
      en: "Title",
      nl: "Titel",
      fr: "Titre",
      de: "Titel",
      default: "Title",
    },
    type: "text",
    width: 220,
    align: "left",
    selected: true,
    sortable: true,
    filterable: true,
    clickable: false,
    aria: { label: "Title column" },

    // date/datetime display (only used for type: 'date' or 'datetime')
    dateDisplayFormat: "dd/MM/yyyy HH:mm",
    dateDisplayFallback: "-",
    dateAssumeTimezone: "auto", // auto | local | utc

    // inline edit/create
    editable: true,
    editField: "product_id",
    editInput: "autocomplete",
    editItems: [
      {
        value: 1,
        title: "P-1001 - Product A",
        sku: "P-1001",
        name: "Product A",
        description: "Example product",
      },
      {
        value: 2,
        title: "P-1002 - Product B",
        sku: "P-1002",
        name: "Product B",
        description: "Example product",
      },
    ],
    editItemTitle: "title",
    editItemValue: "value",
    editSearchFields: ["sku", "name", "description"],
    editDisplayFields: {
      title: "name",
      product_code: "sku",
    },
    defaultInsertValue: 0,

    // multi-select autocomplete
    editMultiple: false,
    editShowCheckboxes: false,
    editSelectionChips: true,
    editMaxSelectionChips: 3,
    editCloseOnSelect: true,

    // custom autocomplete value flow
    editAutocompleteAllowCustom: true,
    editCustomTrim: true,
    editCustomMinLength: 2,
    editCustomField: "title",
    editCustomSentinelField: "product_id",
    editCustomSentinelValue: 0,
    editCustomClearOnSelect: true,
    editCustomResetValueOnSelect: "",
    editCustomPrimaryValueOnCustom: 0,

    // validation
    required: true,
    validationType: "client",
    validationRules: "nullable|integer|min:0",
    clientValidate: ({ value }) =>
      value === null ? "Value is required." : null,
    clientValidationOn: ["tab", "blur", "save"],
    requiredHighlightColor: "rgba(255, 0, 0, 0.08)",
    editExtraValidationRules: {
      title: "required|string|max:120",
    },
    editCustomFieldValidationRules: "required|string|max:120",
    editCustomSentinelValidationRules: "required|integer|min:0",

    // resolve side effects
    editSelectExtraUpdates: {
      title: "name",
      product_code: "sku",
    },

    // boolean rendering
    booleanLabels: { true: "Yes", false: "No" },
    booleanTrueLabel: "Yes",
    booleanFalseLabel: "No",

    // icon/chip rendering
    iconValue: (row) => row.status,
    iconMap: {
      todo: "mdi-progress-clock",
      done: "mdi-check-circle",
      default: "mdi-help-circle",
    },
    iconColorMap: { todo: "orange", done: "green", default: "slate" },
    colorKey: "status_color",
    chipPrependIcon: "mdi-flag",
    chipDefaultColor: "slate",
  },
];
```

---

## Event API

### `RwTable` emits

| Event                    | Payload                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `on-cell-click`          | `(field, id, value)`                                                                                                            |
| `on-menu-item-click`     | `{ item, filters, filterModes, filterTypes, global, selectionFilter, selectedRowIds, sortField, sortOrder, page, rowsPerPage }` |
| `on-row-menu-item-click` | `{ item, row }`                                                                                                                 |
| `change`                 | request payload object (server-side/manual mode)                                                                                |
| `update:checkedRows`     | `Array` of selected ids                                                                                                         |

`on-menu-item-click` is emitted by the top-right toolbar menu and includes the current table state, so custom actions (export, reports, bulk operations) can reuse active filters and sorting context.

### `RwAutocompleteInput` emits

| Event               | Payload                   |
| ------------------- | ------------------------- |
| `update:modelValue` | selected value(s)         |
| `keydown`           | original keyboard event   |
| `blur`              | blur event                |
| `focus`             | focus event               |
| `resolve`           | resolve payload by `kind` |

`resolve` payload kinds:

```js
// item
{ kind: 'item', value, label, item }

// custom
{ kind: 'custom', value, label, input }

// multiple
{ kind: 'multiple', values: [], items: [], item }
```

---

## Keyboard Behavior

RWTable supports keyboard-first editing:

- `Enter`: save/commit current edit (or open edit depending mode)
- `Tab` / `Shift+Tab`: move next/previous editable field
- `ArrowLeft` / `ArrowRight`: horizontal navigation
- `ArrowUp` / `ArrowDown`: vertical navigation
- `Escape`: close dropdown/edit mode
- `Insert`: open create row (when enabled)
- `Alt+M`: open row menu

Autocomplete-specific:

- `ArrowUp/Down`: menu highlight
- `Enter`: select highlighted item
- `Tab`: commit selection and continue navigation
- `Escape`: close open menu first, then bubble upward
- Alt ArowDown: Flip open menu

---

## Validation Model

RWTable supports three modes:

- `client`
- `server`
- `both` (default)

Trigger control:

- global: `clientValidationOn`
- per-column override: `column.clientValidationOn`

Default client triggers:

```js
["tab", "blur", "save"];
```

Validation sources:

1. `validationAdapter` (table-level)
2. `column.clientValidate` (column-level)
3. `column.validationRules`
4. fallback required check (`column.required === true`)

---

## Managed Data Protocol (Client <-> Server)

RWTable sends a normalized payload (mapped by `paramMap`) containing:

- pagination
- sorting
- global search
- column filters
- selection filter context
- optional columns metadata
- manual ordering flags

For option filters, `filterModes` can include:

- `option_contains`
- `option_equals`

When option mode is active, filter keys are mapped to `filterField` (or `editField`) when present.

Expected response (mapped by `responseMap`):

```json
{
  "data": [...],
  "total": 123,
  "current_page": 1,
  "last_page": 5
}
```

---

## Server Modes In Depth (Managed vs Manual)

RWTable supports two server-driven strategies. Both are valid, but they have different responsibilities.

### Comparison table

| Topic                    | Managed mode (`managed=true`)               | Manual mode (`serverSide=true`)                        |
| ------------------------ | ------------------------------------------- | ------------------------------------------------------ |
| Who sends requests?      | RWTable                                     | Parent page component                                  |
| Trigger for requests     | Internal watchers/intersection/pagination   | `@change` event from RWTable                           |
| Infinite append behavior | Built in (`fetchManaged({ append: true })`) | Parent must append/merge rows manually                 |
| Best for                 | Fast integration, fewer moving parts        | Full custom orchestration and custom payload contracts |
| Typical prop combo       | `managed=true`, `dataSource`                | `serverSide=true`, `@change`                           |

### Mode A: Managed mode (recommended default)

RWTable performs the requests itself (Axios or Inertia) and handles pagination/infinite merge internally.

Client usage:

```vue
<RwTable
  :data="initialTasks"
  :columns="columns"
  :managed="true"
  :start-on-mount="true"
  :data-source="{
    type: 'axios',
    path: '/admin/tasks/data',
    method: 'get',
    params: () => ({ context: 'managed-demo' }),
  }"
  :options="{
    scrollMode: 'infinite',
    infinite: {
      rootMargin: '220px',
      resetOnSort: true,
      sortJumpMode: 'first',
    },
  }"
  url-sync="none"
/>
```

Controller recipe (Inertia + `RwTableAction`):

```php
public function index(Request $request)
{
    return RwTableAction::handle(
        $request,
        Task::class,
        'Admin/Task/Index',
        ['id', 'title', 'status'],
        25
    );
}
```

### Mode B: Manual mode (`serverSide=true`)

RWTable emits `@change` with a normalized payload; parent sends requests and provides updated `data` prop.

Client usage:

```vue
<script setup>
import { ref } from "vue";

const tableData = ref({ data: [], total: 0, current_page: 1, last_page: 1 });
const lastSignature = ref("");

async function onServerChange(payload) {
  const response = await window.axios.get("/admin/tasks/data", {
    params: payload,
  });
  const next = response.data;

  const isInfinite = true;
  const isAppendCandidate =
    isInfinite &&
    Number(next.current_page || 1) >
      Number(tableData.value.current_page || 1) &&
    JSON.stringify({ ...payload, page: 1 }) === lastSignature.value;

  if (isAppendCandidate) {
    const seen = new Set(tableData.value.data.map((row) => row.id));
    const merged = [...tableData.value.data];

    for (const row of next.data || []) {
      if (!seen.has(row.id)) {
        seen.add(row.id);
        merged.push(row);
      }
    }

    tableData.value = { ...next, data: merged };
  } else {
    tableData.value = next;
    lastSignature.value = JSON.stringify({ ...payload, page: 1 });
  }
}
</script>

<template>
  <RwTable
    :data="tableData"
    :columns="columns"
    :server-side="true"
    :options="{ scrollMode: 'infinite' }"
    @change="onServerChange"
  />
</template>
```

Controller recipe (manual JSON endpoint):

```php
public function data(Request $request): JsonResponse
{
    $query = Task::query();

    // apply your own filters/sorting from $request payload
    // page, rowsPerPage, global, filters, filterModes, filterTypes, ...

    $perPage = max(1, min(100, (int) $request->input('rowsPerPage', 25)));
    $page = max(1, (int) $request->input('page', 1));
    $sortField = (string) $request->input('sortField', 'id');
    $sortOrder = strtolower((string) $request->input('sortOrder', 'asc')) === 'desc' ? 'desc' : 'asc';

    $paginated = $query->orderBy($sortField, $sortOrder)
        ->paginate($perPage, ['*'], 'page', $page);

    return response()->json([
        'data' => $paginated->items(),
        'total' => $paginated->total(),
        'current_page' => $paginated->currentPage(),
        'last_page' => $paginated->lastPage(),
    ]);
}
```

Important note for infinite + manual mode:

- This mode is expected to append in parent code.
- If parent always replaces `data`, infinite will look like "not working" because page 2 replaces page 1 instead of merging.

---

## Charts and Excel Modules

### Toggle

Enable with string props:

```vue
<RwTable charts="true" excel="true" ... />
```

### Chart endpoint strategy

RWTable derives endpoint prefix from `dataSource.path` first segment. If unavailable, fallback is `/admin`.

Resolved endpoints:

- `GET|POST {prefix}/rw-table-charts/{tableIdentifier}`
- `DELETE {prefix}/rw-table-charts/{id}`

Supported chart types:

- `bar`, `line`, `pie`, `doughnut`
- `bar3d`, `line3d`
- `bar3d_webgl`, `line3d_webgl`

### Excel endpoint strategy

- `GET|POST {prefix}/rw-table-exports/{tableIdentifier}`
- `DELETE {prefix}/rw-table-exports/{id}`

---

## Server-Side (Laravel) API

### Package routes

From `packages/rwtable-laravel/routes/web.php`:

| Method   | URI                                   | Name                       | Controller                        |
| -------- | ------------------------------------- | -------------------------- | --------------------------------- |
| `GET`    | `/rw-table-charts/{tableIdentifier}`  | `rw-table-charts.index`    | `RwTableChartController@index`    |
| `POST`   | `/rw-table-charts/{tableIdentifier}`  | `rw-table-charts.store`    | `RwTableChartController@store`    |
| `DELETE` | `/rw-table-charts/{id}`               | `rw-table-charts.destroy`  | `RwTableChartController@destroy`  |
| `GET`    | `/rw-table-exports/{tableIdentifier}` | `rw-table-exports.index`   | `RwTableExportController@index`   |
| `POST`   | `/rw-table-exports/{tableIdentifier}` | `rw-table-exports.store`   | `RwTableExportController@store`   |
| `DELETE` | `/rw-table-exports/{id}`              | `rw-table-exports.delete`  | `RwTableExportController@destroy` |
| `DELETE` | `/rw-table-exports/{id}/destroy`      | `rw-table-exports.destroy` | `RwTableExportController@destroy` |

Route prefix, name prefix, middleware are configurable via `config/rwtable.php`.

Typical response formats:

```json
// GET /rw-table-charts/{tableIdentifier}
{ "charts": [ { "id": 1, "description": "...", "config": {...} } ] }

// POST /rw-table-charts/{tableIdentifier}
{ "message": "...", "chart": { "id": 1, "description": "...", "config": {...} } }

// GET /rw-table-exports/{tableIdentifier}
{ "exports": [ { "id": 1, "description": "...", "config": [...] } ] }

// POST /rw-table-exports/{tableIdentifier}
{ "message": "...", "export": { "id": 1, "description": "...", "config": [...] } }
```

### Request validation contracts

#### `StoreRwTableExportRequest`

```json
{
  "id": "nullable|exists:rw_table_exports,id",
  "description": "required|string|max:255",
  "config": "required|array"
}
```

#### `StoreRwTableChartRequest`

Supports both legacy and builder config keys. Required:

```json
{
  "id": "nullable|exists:rw_table_charts,id",
  "description": "required|string|max:255",
  "config": "required|array"
}
```

Builder schema highlights:

- `config.builder.dataset.*`
- `config.builder.chart.*`
- `config.builder.presentation.*`

Legacy compatibility keys also accepted:

- `config.xAxis`, `config.yAxis`, `config.seriesField`, `config.series`
- `config.operation`, `config.type`, `config.orientation`
- `config.stacked`, `config.showLegend`
- `config.allowViewerChartTypeChange`, `config.allow_chart_type_change`
- `config.limit`, `config.sortDirection`

### `RwTableAction` reusable backend API

Source: `packages/rwtable-laravel/src/Actions/RwTableAction.php`.

| Method              | Purpose                                                                |
| ------------------- | ---------------------------------------------------------------------- |
| `handle()`          | Read/list with pagination, sort, search, filters, selection filter     |
| `update()`          | Inline update with model/client validation                             |
| `create()`          | Inline create with model/client validation and manual ordering support |
| `destroy()`         | Inline delete by id                                                    |
| `reindexOrdering()` | Rebalance manual ordering field with gaps                              |

Typical controller integration:

```php
use Illuminate\Http\Request;
use Rwsoft\RwTableLaravel\Actions\RwTableAction;
use App\Models\Task;

public function index(Request $request)
{
    return RwTableAction::handle(
        $request,
        Task::class,
        'Admin/Task/Index',
        ['id', 'title', 'status'],
        25,
        ['statuses' => TaskStatus::query()->get()],
        fn ($query) => $query->where('school_id', auth()->user()->school_id)
    );
}

public function inlineUpdate(Request $request, int $id)
{
    return RwTableAction::update(
        $request,
        Task::class,
        $id,
        ['title', 'status', 'priority', 'tags']
    );
}

public function inlineCreate(Request $request)
{
    return RwTableAction::create(
        $request,
        Task::class,
        ['title', 'status', 'priority', 'tags', 'index'],
        ['school_id' => auth()->user()->school_id]
    );
}

public function inlineDelete(Request $request, int $id)
{
    return RwTableAction::destroy($request, Task::class, $id);
}
```

Recommended matching routes:

```php
Route::get('/admin/tasks', [TaskController::class, 'index']);
Route::patch('/admin/tasks/{id}/inline', [TaskController::class, 'inlineUpdate']);
Route::post('/admin/tasks/inline-create', [TaskController::class, 'inlineCreate']);
Route::delete('/admin/tasks/{id}', [TaskController::class, 'inlineDelete']);
```

#### `handle()` expected request keys

- `columns`
- `idKey`
- `global`
- `page`
- `rowsPerPage`
- `sortField`
- `sortOrder`
- `filters`
- `filterModes`
- `filterTypes`
- `selectionFilter` (`none`, `exclude`, `only`)
- `selectedRowIds`
- `manualOrdering`
- `manualOrderField`

#### `update()` expected payload

```json
{
  "field": "title",
  "value": "New value",
  "validationType": "model",
  "validationRules": "required|string|max:255",
  "extraUpdates": [{ "field": "status", "value": "done" }],
  "extraValidationRules": {
    "status": "required|string"
  }
}
```

#### `create()` expected payload

```json
{
  "title": "New row",
  "status": "open",
  "validationType": "model",
  "validationRules": {
    "title": "required|string|max:255"
  },
  "manualOrdering": true,
  "manualOrderField": "index",
  "insertAboveId": 123
}
```

---

## Database Schema

### `rw_table_charts`

- `id`
- `user_id` (nullable FK, `nullOnDelete`)
- `table_identifier` (indexed)
- `description`
- `config` (json, nullable)
- timestamps
- unique: `(user_id, table_identifier, description)`

### `rw_table_exports`

- `id`
- `user_id` (nullable FK, `nullOnDelete`)
- `table_identifier` (indexed)
- `description`
- `config` (json)
- timestamps
- unique: `(user_id, table_identifier, description)`

---

## Internationalization (i18n)

### Server package translations

Loaded in namespace `rwtable` via service provider.

Publish overrides:

```bash
php artisan vendor:publish --tag=rwtable-lang
```

Override path:

```text
lang/vendor/rwtable/{locale}/rwtable.php
```

Shipped locales in package:

- `en`
- `nl`
- `fr`
- `de`

### Client translation source priority

RWTable resolves messages in this order:

1. `i18n.messages` prop
2. `page.props.rwtable.translations` (Inertia shared props)
3. internal fallback text

Locale resolution:

1. `i18n.locale`
2. `page.props.rwtable.locale`
3. `'en'`

### Translated column headers (`labelKey`)

Use `labelKey` in columns:

```js
{ key: 'title', label: 'Title', labelKey: 'title' }
```

Then define in translation file:

```php
'vue' => [
    'columns' => [
        'title' => 'Title',
    ],
],
```

Fallback order per column:

1. `labelTranslations[locale]`
2. `labelKey` (`columns.<labelKey>`)
3. `label`

---

## End-to-End Examples

### A) Client-side only table

```vue
<script setup>
import { RwTable } from "@rudiwer/rwtable-vue";

const data = {
  data: [
    { id: 1, title: "Task A", status: "Open" },
    { id: 2, title: "Task B", status: "Done" },
  ],
  total: 2,
};

const columns = [
  { key: "id", label: "ID", labelKey: "id", type: "number", selected: true },
  {
    key: "title",
    label: "Title",
    labelKey: "title",
    type: "text",
    filterable: true,
    editable: true,
    validationType: "client",
    validationRules: "required|string|max:255",
  },
  {
    key: "status",
    label: "Status",
    labelKey: "status",
    type: "text",
    filterable: true,
  },
];
</script>

<template>
  <RwTable :data="data" :columns="columns" table-id="tasks-client" />
</template>
```

### B) Managed Inertia mode

```vue
<RwTable
  table-id="tasks-managed"
  :data="tasks"
  :columns="columns"
  :managed="true"
  :data-source="{
    type: 'inertia',
    path: '/admin/tasks',
    method: 'get',
    data: 'tasks',
  }"
  :columns-param-mode="'keys'"
/>
```

### C) Inline edit with autocomplete multi-select

```js
{
  key: 'tags',
  label: 'Labels',
  labelKey: 'labels',
  type: 'text',
  editable: true,
  editInput: 'autocomplete',
  editItems: [
    { value: 'backend', title: 'Backend' },
    { value: 'frontend', title: 'Frontend' },
    { value: 'urgent', title: 'Urgent' },
  ],
  editMultiple: true,
  editShowCheckboxes: true,
  editSelectionChips: true,
  editMaxSelectionChips: 10,
  validationType: 'client',
  validationRules: 'required|array|min:1',
}
```

---

## Troubleshooting

### Blue browser focus ring still visible

- Ensure latest bundle is loaded
- hard refresh (`Ctrl+Shift+R`)
- verify package CSS is included and not overridden downstream

### Column headers not translated

- use `labelKey` on columns
- ensure key exists under `vue.columns.*`
- confirm locale is propagated into `page.props.rwtable.locale`

### Clickable ID text appears blue but you want neutral/black

RWTable uses an internal class (`rw-id-hover`) for likely ID click targets.

Option A (recommended for page-specific behavior): add a local CSS override in your page component.

```vue
<style scoped>
:deep(.rw-id-hover) {
  color: rgb(15 23 42);
}

:deep(.rw-id-hover:hover) {
  color: rgb(15 23 42);
}
</style>
```

Option B: use `cellClass`/`cellStyle` for per-column custom styling.

```vue
<RwTable
  ...
  :cell-class="
    ({ col }) => (col.key === 'id' ? 'text-slate-900 font-semibold' : null)
  "
  :cell-style="
    ({ col }) => (col.key === 'id' ? { color: 'rgb(15 23 42)' } : null)
  "
/>
```

Option C: if you need this globally in your project, add a global stylesheet rule for `.rw-id-hover`.

### Chart/Excel API calls hit wrong prefix

- check `dataSource.path`
- RWTable derives prefix from first segment (fallback `/admin`)

### Inline update 422 errors

- verify `validationType` and `validationRules`
- for server/model validation ensure model has `rules($id)`
- include `editableFields` in backend controller wrapper when needed

### WebGL chart type fails

- non-WebGL environments should switch to non-WebGL chart types
- browser/GPU may not support WebGL context

---
