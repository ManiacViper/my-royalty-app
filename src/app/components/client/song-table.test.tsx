import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import SongsTable from "./song-table";
import { Song } from "../server/songs";

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

    const rows = screen.getAllByRole("row");
    const firstRowColumns = within(rows[1]).getAllByRole("cell");
    const secondRowColumns = within(rows[2]).getAllByRole("cell");

    expect(rows).toHaveLength(3);
    expect(firstRowColumns[0].textContent).toBe("Die with a Smile");
    expect(firstRowColumns[1].textContent).toBe("Lady Gaga, Bruno Mars");
    expect(firstRowColumns[2].textContent).toBe("56%");

    expect(secondRowColumns[0].textContent).toBe("Birds of a Feather");
    expect(secondRowColumns[1].textContent).toBe("Billie Eilish");
    expect(secondRowColumns[2].textContent).toBe("0%");
  });
});
