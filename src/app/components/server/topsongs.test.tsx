import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { TopSongs } from "./songs";

describe("SongsTable Component", () => {
  it("renders top 100 songs including the column headers", async () => {
    const topSongsComponent = await TopSongs();
    render(topSongsComponent);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(101);
  });
});
