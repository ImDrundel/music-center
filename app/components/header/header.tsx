import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import CatalogIcon from "./img/catalog-icon.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__text}>
        <Link className={styles.header__link} href="/">
          Your music center
        </Link>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttons__catalog}>
          <Link href="/catalog">
            <Image src={CatalogIcon} alt="Catalog" width={50} height={50} />
          </Link>
        </button>
      </div>
      
      <div>
        <Link href="/artist/1">Artist</Link>
      </div>
      <div>
        <Link href="/album/1">Album</Link>
      </div>
    </div>
  );
}
