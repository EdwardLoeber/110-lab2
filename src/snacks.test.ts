import { describe, it, expect } from "vitest";
import { snackList } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snackList.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snackList).toContain("chips");
  });
});