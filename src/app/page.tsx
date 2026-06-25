import SongsTable from "./components/client/song-table";

export default function Home() {
  const songs = [
    {
      id: 1,
      title: "some-song-name",
      author: "some-author-name",
      progress: 0.27,
    },
    {
      id: 2,
      title: "some-song-name-2",
      author: "some-author-name-2",
      progress: 0.6,
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SongsTable songs={songs}></SongsTable>
      </main>
    </div>
  );
}
