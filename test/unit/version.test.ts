import { describe, expect, it } from "vitest";

import { isSupportedElasticsearch } from "../../lib/version";

describe("isSupportedElasticsearch", () => {
  it.each(["7.0.0", "7.1.2", "7.99.0", "7.0.0-SNAPSHOT"])(
    "accepts Elasticsearch %s",
    (number) => {
      expect(isSupportedElasticsearch({ number })).toBe(true);
    },
  );

  it.each(["6.17.0", "8.0.0", "8.1.0"])(
    "refuses Elasticsearch %s",
    (number) => {
      expect(isSupportedElasticsearch({ number })).toBe(false);
    },
  );

  it("refuses OpenSearch, whatever version it reports", () => {
    expect(
      isSupportedElasticsearch({
        distribution: "opensearch",
        number: "7.10.2",
      }),
    ).toBe(false);
  });

  it("refuses an unreadable version", () => {
    expect(isSupportedElasticsearch({ number: "unknown" })).toBe(false);
  });
});
