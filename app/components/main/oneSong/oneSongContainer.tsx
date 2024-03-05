import { promises as fs } from "fs";
import OneSong from "./oneSong";

export interface Song {
  id: number;
  name: string;
  duration: string;
  artist: string;
  rating: number;
  album: string;
  date: string;
}

export default async function SongContainer() {
  const file = await fs.readFile(
    process.cwd() + "/public/music-list-data.json",
    "utf8"
  );
  const songs = JSON.parse(file);

  return (
    <>
      {songs.songs?.map((song: Song) => {
        return <OneSong song={song} key={song.id} />;
      })}
    </>
  );
}
