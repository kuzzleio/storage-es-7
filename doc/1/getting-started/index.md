---
code: false
type: page
title: Getting started
order: 100
description: Install and select the Elasticsearch 7 storage driver
---

# Getting started

`kuzzle-storage-es-7` is the Elasticsearch 7 storage driver of [Kuzzle](https://github.com/kuzzleio/kuzzle) 2: the code Kuzzle used to embed for Elasticsearch 7, moved as it is to its own package. Same mappings, same queries, same errors.

## Install

Nothing to install: Kuzzle 2 depends on `kuzzle-storage-es-7` at a pinned version and installs it with itself. It is the
**built-in** Elasticsearch 7 driver, the one Kuzzle runs when `services.storageEngine.majorVersion` is `"7"`:

```jsonc
{
  "services": {
    "storageEngine": {
      "majorVersion": "7",
      "client": { "node": "http://localhost:9200" },
    },
  },
}
```

An existing Elasticsearch 7 application keeps its `.kuzzlerc` and its `package.json` unchanged.

### Select it by name

You can also name the driver, as you would an external one. This is how Kuzzle 3 will select every storage engine
(`majorVersion` is deprecated, see [Towards Kuzzle 3](/core/2/guides/kuzzle-3)). Add the package to your
application, at the version your Kuzzle depends on (`npm ls kuzzle-storage-es-7`), then set `driver`:

```bash
npm install kuzzle-storage-es-7@<the version npm ls shows>
```

```jsonc
{
  "services": {
    "storageEngine": {
      "driver": "kuzzle-storage-es-7",
      "client": { "node": "http://localhost:9200" },
    },
  },
}
```

With `driver` set, `majorVersion` is ignored, and Kuzzle logs a warning if both are set: remove `majorVersion`.

## Check

At startup, Kuzzle logs the driver it runs:

```
[ℹ] Elasticsearch configuration is set to major version : 7
```

(`[ℹ] Storage driver: kuzzle-storage-es-7@<version>` when you select it with `driver`.) The rest of `services.storageEngine` is described in [Configuration](/drivers/storage-es-7/1/configuration).
