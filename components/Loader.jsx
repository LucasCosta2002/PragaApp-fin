import styles from '../styles/loader.module.css'

export default function Loader() {
    return (
        <div className={`${styles.skFoldingCube} `}>
            <div className={`${styles.skCube1} ${styles.skCube}`}></div>
            <div className={`${styles.skCube2} ${styles.skCube}`}></div>
            <div className={`${styles.skCube4} ${styles.skCube}`}></div>
            <div className={`${styles.skCube3} ${styles.skCube}`}></div>
        </div>
    )
}
