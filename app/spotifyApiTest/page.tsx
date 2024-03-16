"use client";
import { useEffect, useState } from "react";

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
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}
