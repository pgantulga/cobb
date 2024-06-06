import styles from './SectionTitle.module.scss'

function SectionTitle({title}) {
    return (
        <>
            <div className={`${styles.sectionTitle} container px-4  `}>
                <h1>{title}</h1>
            </div>  
        </>)
}

export default SectionTitle