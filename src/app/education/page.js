import styles from './education.module.css'

function Education() {
  return (
    <section className={styles.education}>
      <h1 className={styles.mainHeading}>Education</h1>
      <div>
        <h2 className={styles.headings}><li>Undergraduate</li></h2>
        <p className={styles.bodyText}>College: Yeshwantrao Chavan College of Engineering, Nagpur.</p>
        <p className={styles.bodyText}>Degree: Bachelor of Technology.</p>
        <p className={styles.bodyText}>Branch: Information Technology.</p>
        <p className={styles.bodyText}>CGPA: 8.45</p>
      </div>
      <div>
        <h2 className={styles.headings}><li>HSC</li></h2>
        <p className={styles.bodyText}>College: Narayana Jn College, Telangana</p>
        <p className={styles.bodyText}>Stream: Science (PCM).</p>
        <p className={styles.bodyText}>Percentage: 89%</p>
      </div>
      <div>
        <h2 className={styles.headings}><li>SSC</li></h2>
        <p className={styles.bodyText}>School: Vedant Vidhya Mandir, Gangakhed.</p>
        <p className={styles.bodyText}>Percentage: 93.40%</p>
      </div>
    </section>
  )
}

export default Education
