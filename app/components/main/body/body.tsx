import Song from '../song/song'
import styles from './body.module.scss'
import './body.module.scss'

export default function Body() {
    return (
        <div className={styles.musicBackground}>

            <Song />
        </div>
    )
}
