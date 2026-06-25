import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SongsTable, { Song } from "./song-table";

const mockSongs: Array<Song> = [
  {
    id: 1,
    title: "Die with a Smile",
    author: "Lady Gaga, Bruno Mars",
    progress: 0.56,
  },
  {
    id: 2,
    title: "Birds of a Feather",
    author: "Billie Eilish",
    progress: 0.0,
  },
];

describe("SongsTable Component", () => {
  it("renders correctly", () => {
    render(<SongsTable songs={mockSongs}></SongsTable>);
  });
});
