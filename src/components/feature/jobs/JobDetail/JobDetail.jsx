import styles from './JobDetail.module.scss'
import SectionTitle from '@/components/common/SectionTitle/SectionTitle'
import ButtonLink from '@/components/common/ButtonLink/ButtonLink'
function JobDetail(props) {
    return (
        <>
            <div
                className={styles.detailImage}
                style={{ backgroundImage: `url(${props.imageUrl})` }}
            >
            </div>
            <SectionTitle
                title={props.name}
            />
            <div className='px-4 my-4'>
                <p>{props.description}</p>
            </div>
                <ButtonLink path="/">Back to Home</ButtonLink>
        </>

    )
}

export default JobDetail