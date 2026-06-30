"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Song } from "../server/songs";

export default function SongsTable({ songs }: { songs: Array<Song> }) {
  const toPercentage = (progress: number) => {
    const progressInPercentage = Math.round(progress * 100);
    return `${progressInPercentage}%`;
  };

  const buildRows = (songs: Array<Song>) => {
    return songs.map((song) => {
      return (
        <TableRow key={song.id}>
          <TableCell className="font-medium">{song.id}</TableCell>
          <TableCell className="font-medium">{song.title}</TableCell>
          <TableCell>{song.author}</TableCell>
          <TableCell className="text-right">
            {toPercentage(song.progress)}
          </TableCell>
        </TableRow>
      );
    });
  };
  return (
    <Table>
      <TableCaption>Top 100 songs in 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead className="text-right">Progress</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{buildRows(songs)}</TableBody>
    </Table>
  );
}
