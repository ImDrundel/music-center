"use client";
import style from "./oneSong.module.scss";
import Image from "next/image";
import SongIcon from "@/public/song-icon.png";
import PlayIcon from "@/public/play-icon.png";
import AddIcon from "@/public/add-icon.png";
import LikeButtonUnpressed from "@/public/like-button-unpressed.svg";
import LikeButtonPressed from "@/public/like-button-pressed.svg";
import Link from "next/link";
import React, { useState } from "react";

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

export default function OneSong(props: any) {

  // const state = {
  //   isLike: false,
  // };

  // let img = LikeButtonUnpressed;

  // const [like, setLike] = useState(state);

  // const onClick = () => {
  //   if (like.isLike) {
  //     like.isLike = false;
  //     img = LikeButtonPressed;
  //   } else {
  //     like.isLike = true;
  //     img = LikeButtonUnpressed;
  //   }

  //   setLike({...like});
  // };


  //В том ли месте я добавляю useState
  //Как праивльно обновлять без мутации стейт с одном переменной, которая меняется 
  //Как сделать перерисовку
  return (
    <>
      {props.songs?.map((data: IFetcheddataTest) => {
        return (
          <div className={style.block} key={data.id}>
            <div className={style.image}>
              <Image src={SongIcon} alt="SongIcon" />
            </div>
            <div className={style.fullInfo}>
              <div className={style.nameAndRating}>
                <div className={style.name}>
                  <Link href={`/song/${data.id}`}>{data.name}</Link>
                </div>
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
                <div className={style.subbuttons}>
                  <button className={style.play}>
                    <Image src={PlayIcon} alt="PlayIcon" />
                  </button>
                  {/* <button className={style.like} onClick={onClick}>
                    <Image src={img} alt="LikeButton" />
                  </button> */}
                  <button className={style.like} >
                    <Image src={LikeButtonUnpressed} alt="LikeButton" />
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
