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
  name: string;
  progress: number;
};
export default function SongsTable() {
  const songs = [{ id: "123", name: "some-song-name", progress: 0.27 }];
  const buildRows = (songs: Array<Song>) => {
    return songs.map((song) => {
      return (
        <TableRow key={song.id}>
          <TableCell className="font-medium">{song.name}</TableCell>
          <TableCell>{song.progress}</TableCell>
          {/* <TableCell className="text-right">$250.00</TableCell> */}
        </TableRow>
      );
    });
  };
  return (
    <Table>
      <TableCaption>Top songs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">name</TableHead>
          <TableHead>progress</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>{buildRows(songs)}</TableBody>
    </Table>
  );
}
