import { promises as fs } from "fs";
import { Song } from "@/app/components/client/song-table";

export async function getTopSongs(): Promise<Array<Song>> {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/top-songs.json",
    "utf8",
  );
  const data = JSON.parse(file);
  return data;
}
