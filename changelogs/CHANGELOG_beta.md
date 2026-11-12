## [1.1.1-beta.1](https://github.com/kuzzleio/storage-es-7/compare/v1.1.0...v1.1.1-beta.1) (2026-11-12)

### Bug Fixes

* report why the engine does not answer at startup, and fail on what waiting cannot fix ([6bf54f8](https://github.com/kuzzleio/storage-es-7/commit/6bf54f885fa345c847adda27e891279cb9849a9e)), closes [kuzzleio/storage-es-8#9](https://github.com/kuzzleio/storage-es-8/issues/9)

## [1.1.0-beta.2](https://github.com/kuzzleio/storage-es-7/compare/v1.1.0-beta.1...v1.1.0-beta.2) (2026-11-02)

### Features

* close the engine client on Kuzzle's shutdown ([6f2ede8](https://github.com/kuzzleio/storage-es-7/commit/6f2ede84c5771c6dcb576a61917adf6b35d419cf)), closes [kuzzleio/kuzzle#3141](https://github.com/kuzzleio/kuzzle/issues/3141)

## [1.1.0-beta.1](https://github.com/kuzzleio/storage-es-7/compare/v1.0.0...v1.1.0-beta.1) (2026-11-02)

### Dependencies

* **deps:** drop bluebird ([3187b29](https://github.com/kuzzleio/storage-es-7/commit/3187b294f44fd264deb99f4af3c415ea27bc22fc))

### Bug Fixes

* keep lodash types out of the shipped declarations ([10314f0](https://github.com/kuzzleio/storage-es-7/commit/10314f06ff12d1e6b861c4ca7aa95d37685ff3fa))
* map the engines' actual error messages to storage errors ([c95eb36](https://github.com/kuzzleio/storage-es-7/commit/c95eb36025c3be2a2bfb6371d9b3065fa128966d))
* refuse an Elasticsearch 8 cluster and an OpenSearch one ([5468b63](https://github.com/kuzzleio/storage-es-7/commit/5468b63e24b49224bb115ad4785ff4d6bcd33c94))

## 1.0.0-beta.1 (2026-10-30)

### Features

* Elasticsearch 7 storage driver for Kuzzle ([67f4cfb](https://github.com/kuzzleio/storage-es-7/commit/67f4cfbb88adfc25b764972d925d9baeca937bae))
