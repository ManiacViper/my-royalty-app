import { promises as fs } from "fs";

export type Song = {
  id: number;
  title: string;
  author: string;
  progress: number;
};

export type FormattedSong = Omit<Song, "progress"> & {
  progress: string;
};

export const topSongsRelativeFilePath = "/src/app/data/top-songs.json";
export async function getTopSongs(filePath: string): Promise<Array<Song>> {
  const file = await fs.readFile(process.cwd() + filePath, "utf8");
  const data: Array<Song> = JSON.parse(file);
  return data;
}
