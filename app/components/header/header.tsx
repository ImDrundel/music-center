import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import AllMusicIcon from "./img/all-music-icon.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__text}>
        <Link className={styles.header__link} href="./">
          Your music center
        </Link>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttons__allMusic}>
          <Link href="./all-music">
            <Image src={AllMusicIcon} alt="All music" width={50} height={50} />
          </Link>
        </button>
      </div>
    </div>
  );
}
