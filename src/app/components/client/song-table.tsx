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

type Song = {
  id: string;
  title: string;
  author: string;
  progress: number;
};
export default function SongsTable() {
  const songs = [
    {
      id: "123",
      title: "some-song-name",
      author: "some-author-name",
      progress: 0.27,
    },
    {
      id: "222",
      title: "some-song-name-2",
      author: "some-author-name-2",
      progress: 0.58,
    },
  ];
  const buildRows = (songs: Array<Song>) => {
    return songs.map((song) => {
      return (
        <TableRow key={song.id}>
          <TableCell className="font-medium">{song.title}</TableCell>
          <TableCell>{song.author}</TableCell>
          <TableCell className="text-right">{song.progress}</TableCell>
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
