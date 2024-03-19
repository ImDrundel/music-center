"use client";
import { useEffect, useState } from "react";
import style from "./page.module.scss";

const CLIENT_ID = "542aa9ff763e444fb06e2aa24ef157e3";
const CLIENT_SECRET = "a24c3744fc184fa481e9b2da2d39607b";

export default function SpitifyApiCAll() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //Search
  async function search() {
    console.log(`Search for ${searchInput}`);

    //get request using search to get the Artist ID
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    let artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log(`Artist Id is ${artistID}`);
    //get request with Artist ID grab all the albums
    let album = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums`,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    //display those albums
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.search}>
          <input
            className={style.input}
            type="text"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className={style.button} onClick={search}>
            Search
          </button>
        </div>
      </div>
      <div className={style.container}></div>
    </>
  );
}
