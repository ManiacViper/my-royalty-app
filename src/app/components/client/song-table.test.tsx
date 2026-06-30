import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
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

afterEach(() => {
  cleanup();
});

describe("SongsTable Component", () => {
  it("renders correctly", () => {
    render(<SongsTable songs={mockSongs}></SongsTable>);

    const idHeader = screen.getByRole("columnheader", { name: "ID" });
    const songNameHeader = screen.getByRole("columnheader", {
      name: "Song Name",
    });
    const authorHeader = screen.getByRole("columnheader", { name: "Author" });
    const progressHeader = screen.getByRole("columnheader", {
      name: "Progress",
    });

    const rows = screen.getAllByRole("row");
    const firstRowColumns = rows[1].querySelectorAll("td");
    const secondRowColumns = rows[2].querySelectorAll("td");

    expect(rows).toHaveLength(3);

    expect(idHeader).toBeDefined();
    expect(songNameHeader).toBeDefined();
    expect(authorHeader).toBeDefined();
    expect(progressHeader).toBeDefined();

    expect(firstRowColumns[0].textContent).toBe("1");
    expect(firstRowColumns[1].textContent).toBe("Die with a Smile");
    expect(firstRowColumns[2].textContent).toBe("Lady Gaga, Bruno Mars");
    expect(firstRowColumns[3].textContent).toBe("56%");

    expect(secondRowColumns[0].textContent).toBe("2");
    expect(secondRowColumns[1].textContent).toBe("Birds of a Feather");
    expect(secondRowColumns[2].textContent).toBe("Billie Eilish");
    expect(secondRowColumns[3].textContent).toBe("0%");
  });

  it("renders only header column names if passed an empty list", () => {
    render(<SongsTable songs={[]}></SongsTable>);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(1);
  });
});
