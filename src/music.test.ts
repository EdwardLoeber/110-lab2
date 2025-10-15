import { describe, it, expect } from "vitest";
import { songs } from "./music";

describe("music", () => {
  it("should have at least 2 items", () => {
    expect(songs.length).toBeGreaterThanOrEqual(2);
  });

  it("should include 'Wish-Blood Orange'", () => {
    expect(songs).toContain("Wish-Blood Orange");
  });
});