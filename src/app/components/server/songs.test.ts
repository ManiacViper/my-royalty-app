import { describe, it, expect } from "vitest";
import { getTopSongs, topSongsRelativeFilePath } from "./songs";

describe("SongsTable Component", () => {
  it("renders correctly", async () => {
    const result = await getTopSongs(topSongsRelativeFilePath);
    expect(result.length === 100);
    expect(result[0]).toMatchObject({
      id: 1,
      title: "Die with a Smile",
      author: "Lady Gaga, Bruno Mars",
      progress: 0.56,
    });
  });
});
