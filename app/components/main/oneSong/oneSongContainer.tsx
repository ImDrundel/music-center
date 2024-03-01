
import { promises as fs } from "fs";
import OneSong from "./oneSong"

interface propsI {
  id: number;
  data: any;
  name: string;
  rating: number;
  artist: string;
  duration: string;
  album: string;
  date: string;
  s: number;
}

export default async function SongContainer() {
  const file = await fs.readFile(
    process.cwd() + "/public/music-list-data.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return ( 
    <>
    <OneSong musicCatalog={data} />
    </>
  );
}
