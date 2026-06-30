"use server";

import { promises as fs } from "fs";
import SongsTable from "../client/song-table";

export type Song = {
  id: number;
  title: string;
  author: string;
  progress: number;
};

export type FormattedSong = Omit<Song, "progress"> & {
  progress: string;
};

export async function top100SongsFilePath() {
  return "/src/app/data/top-songs.json";
}
export async function getTopSongs(filePath: string) {
  const file = await fs.readFile(process.cwd() + filePath, "utf8");
  const data: Array<Song> = JSON.parse(file);
  return data;
}

export async function TopSongs() {
  const filePath = await top100SongsFilePath();
  const topSongs = await getTopSongs(filePath);
  return <SongsTable songs={topSongs}></SongsTable>;
}
