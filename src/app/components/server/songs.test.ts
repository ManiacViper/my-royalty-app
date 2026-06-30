import { describe, it, expect } from "vitest";
import { getTopSongs, top100SongsFilePath } from "./songs";

describe("Songs Component", () => {
  it("gets top 100 songs", async () => {
    const filePath = await top100SongsFilePath();
    const result = await getTopSongs(filePath);
    expect(result.length).toEqual(100);
    expect(result[0]).toMatchObject({
      id: 1,
      title: "Die with a Smile",
      author: "Lady Gaga, Bruno Mars",
      progress: 0.56,
    });
  });

  it("handles non existing file with empty array", async () => {
    const result = await getTopSongs("non-existing-file.json");
    expect(result).toEqual([]);
  });
});
