import styles from './header.module.scss'
export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.headerText}>Your music center</div>
        </header>
    )
}
