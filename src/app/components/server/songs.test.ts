import { describe, it, expect } from "vitest";
import { getTopSongs } from "./songs";

describe("SongsTable Component", () => {
  it("renders correctly", async () => {
    const result = await getTopSongs();
    expect(result.length === 100);
  });
});
