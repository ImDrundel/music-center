import Style from "./style.module.scss";
import { promises as fs } from "fs";
import Image from "next/image";
// Change img directory!
import SongIcon from "@/public/song-icon.png";
import PlayIcon from "@/public/song-icon.png";
import AddIcon from "@/public/song-icon.png";
// import { useRouter } from "next/router";

interface IFetcheddataTest {
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

export default async function CurrentSong({
  params,
}: {
  params: { musicid: string };
}) {
  const file = await fs.readFile(
    process.cwd() + "/public/music-list-data.json",
    "utf8"
  );
  debugger;
  const data = JSON.parse(file);

  // const { query } = useRouter();

  return (
    <>
      <div>Hi!</div>
      <div> Params: {params.musicid}</div>
      {data.songs.map((data: IFetcheddataTest) => {
        <div className={Style.container} key={data.id}>
          <div className={Style.song}>
            <div className={Style.title}>{data.name}</div>
            <div className={Style.subtitile}>
              <div className={Style.artist}> {data.artist}</div>
              <div className={Style.album}> {data.album}</div>
            </div>
            <div className={Style.image}>
              <Image src={SongIcon} alt="SongIcon" />
            </div>
            <div className={Style.additionalInfo}>
              <div className={Style.rating}>{data.rating}</div>
              <div className={Style.date}> {data.date}</div>
            </div>
            <div className={Style.footer}>
              <div className={Style.player}></div>
              <div className={Style.subbuttons}>
                <button className={Style.add}>
                  <Image src={AddIcon} alt="AddIcon" />
                </button>
                <button className={Style.like}>
                  {/* Change to "like" button! */}
                  <Image src={AddIcon} alt="AddIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>;
      })}
    </>
  );
}
