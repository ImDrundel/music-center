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
import { Song } from "./oneSongContainer";

export default function OneSong(props: { song: Song }) {
  const [like, setLike] = useState({ isLike: true });

  const onClick = () => {
    setLike({ ...like, isLike: !like.isLike });
  };

  return (
    <div className={style.block} key={props.song.id}>
      <div className={style.image}>
        <Image src={SongIcon} alt="SongIcon" />
      </div>
      <div className={style.fullInfo}>
        <div className={style.nameAndRating}>
          <div className={style.name}>
            <Link href={`/song/${props.song.id}`}>{props.song.name}</Link>
          </div>
          <div className={style.rating}>Rating: {props.song.rating}</div>
        </div>
        <div className={style.infoAndIcons}>
          <div className={style.smallInfo}>
            <div className={style.artistAndDuration}>
              <div className={style.artist}>Artist: {props.song.artist}</div>
              <div className={style.duration}> {props.song.duration}</div>
            </div>
            <div className={style.albumAndDate}>
              <div className={style.album}>Album: {props.song.album}</div>
              <div className={style.date}>{props.song.date}</div>
            </div>
          </div>
          <div className={style.subbuttons}>
            <button className={style.play}>
              <Image src={PlayIcon} alt="PlayIcon" />
            </button>

            <button className={style.like} onClick={onClick}>
              {like.isLike ? (
                <Image src={LikeButtonUnpressed} alt="LikeButton" />
              ) : (
                <Image src={LikeButtonPressed} alt="LikeButton" />
              )}
            </button>
            <button className={style.add}>
              <Image src={AddIcon} alt="AddIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
