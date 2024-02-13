import { promises as fs } from "fs";
import style from "./song.module.scss";
import Image from "next/image";
import SongIcon from "./img/song-icon.png";
import PlayIcon from "./img/play-icon.png";
import AddIcon from "./img/add-icon.png";

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

export default async function Song() {
  const file = await fs.readFile(
    process.cwd() + "/public/music-list-data.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <>
      {data.songs.map((data: IFetcheddataTest) => {
        return (
          <div className={style.block} key={data.id}>
            <div className={style.image}>
              <Image src={SongIcon} alt="SongIcon" />
            </div>
            <div className={style.fullInfo}>
              <div className={style.nameAndRating}>
                <div className={style.name}>{data.name}</div>
                <div className={style.rating}>Rating: {data.rating}</div>
              </div>
              <div className={style.infoAndIcons}>
                <div className={style.smallInfo}>
                  <div className={style.artistAndDuration}>
                    <div className={style.artist}>Artist: {data.artist}</div>
                    <div className={style.duration}> {data.duration}</div>
                  </div>
                  <div className={style.albumAndDate}>
                    <div className={style.album}>Album: {data.album}</div>
                    <div className={style.date}>{data.date}</div>
                  </div>
                </div>
                <div className={style.playAndAdd}>
                  <button className={style.play}>
                    <Image src={PlayIcon} alt="PlayIcon" />
                  </button>
                  <button className={style.add}>
                    <Image src={AddIcon} alt="AddIcon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
