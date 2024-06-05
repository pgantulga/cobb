import styles from './PageTitle.module.scss'
function PageTitle({ title }) {
  return (
    <>
      <div className={`${styles.pageTitle} container`}>
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default PageTitle