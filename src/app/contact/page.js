import Link from 'next/link';
import styles from './contact.module.css';


function Contact() {
  return (
    <section className={styles.contact}>
      <h1 className={styles.mainHeading}>Contact</h1>
      <form action="https://formsubmit.co/shubhampote789@gmail.com" method='POST' className={styles.form}>
        <div className={styles.inputFieldDiv}>
          <label htmlFor="name"></label>
          <input type="text" placeholder='Name' name='name' id='name' />
        </div>
        <div className={styles.inputFieldDiv}>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder='Email' />
        </div>
        <div className={`${styles.inputFieldDiv} ${styles.msg}`}>
          <label htmlFor="msg"></label>
          <input type="text" name="msg" id="msg" placeholder='Message' />
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.btn}>SEND</button>
        </div>
      </form>
      <div className={styles.socialLogoDiv}>
      
      </div>
    </section>
  )
}
export default Contact
