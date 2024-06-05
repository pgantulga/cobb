import styles from './Hero.module.scss'
function Hero({ title, description, bgImage }) {
    return (
        <div
            className={styles.hero}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={styles.overlay}>
                <h1><span>{title}</span></h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Hero