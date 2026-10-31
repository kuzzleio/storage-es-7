---
code: false
type: page
title: TypeScript
order: 300
description: The types of the Elasticsearch 7 storage driver
---

# TypeScript

The package is written in TypeScript and ships its declarations.

## What it exports

| Export                                       | What it is                                                                                                                        |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `ES7Driver` (also the `default` export)      | The driver class, implementing Kuzzle's `StorageDriver` contract. Kuzzle builds one instance per storage scope (public, private). |
| `ES7Driver.createNativeClient(clientConfig)` | Builds a new `Client` of `@elastic/elasticsearch` 7.13.0.                                                                         |

You do not instantiate the driver yourself: Kuzzle does, at startup. Its `manifest.json` declares the Kuzzle versions
it supports and its capabilities (see [Compatibility](/drivers/storage-es-7/1/compatibility)).

## A typed native client

`app.storage.storageClient`, `app.storage.StorageClient` and the plugins' `context.constructors.ESClient` give the
driver's own client, built by `createNativeClient`. Kuzzle types them `any`, since the client depends on the driver.
To get the Elasticsearch 7 client's types, take them from the driver:

```ts
import type { ES7Driver } from "kuzzle-storage-es-7";

type StorageClient = ReturnType<typeof ES7Driver.createNativeClient>;

const client = app.storage.storageClient as StorageClient;
const { count } = await client.count({ index: "@&nyc-open-data.yellow-taxi" });
```

A type-only import loads nothing at runtime. Your application needs the package as a dependency for TypeScript to find it: with npm, the copy Kuzzle installs is usually hoisted, but declare it to rely on it (at the version `npm ls kuzzle-storage-es-7` shows).

::: warning
Indices are named after Kuzzle's index and collection names (`&<index>.<collection>` for the public scope, behind an
alias `@&<index>.<collection>`). Query the native client only for what the Kuzzle API does not offer, and never write
through it to Kuzzle's internal index.
:::

## Configuration type

Kuzzle exports the type of `services.storageEngine`:

```ts
import type { StorageEngineElasticsearch } from "kuzzle";
```
