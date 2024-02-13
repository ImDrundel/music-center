import Style from "./style.module.scss";
import { promises as fs } from "fs";

export default async function Currentsong() {
  const file = await fs.readFile(
    process.cwd() + "/app/components/main/song/data.json",
    "utf8"
  );
  return (
    <>
      <div> Hello music</div>
    </>
  );
}
