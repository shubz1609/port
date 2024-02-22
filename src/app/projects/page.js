import Image from 'next/image';
import styles from './projects.module.css';
import game from './game.jpg';
import news from './news.png';
import clock from './clock.jpg';
import textutils from './textutils.png';
// import Link from 'next/link';
import Food from './Food.png';


function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.mainHeading}>Projects</h1>
      <div className={styles.projectDiv}>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={game} alt='taskTracker' className={styles.img}/></div>
          <h3 className={styles.heading}>Tic-Tac-Toe GAme</h3>
          <p className={styles.description}>The Project is purely made by using the concepts of C++
And DSA Algorithm.</p>
          <div className={styles.linkDiv}>
            {/* <Link href='https://github.com/SatyamGade/TaskTracker' target='_blank' className={styles.link}>Source Code</Link> */}
            {/* <Link href='https://satyamgade.github.io/TaskTracker/' target='_blank' className={styles.link}>Visit Website</Link> */}
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={news} alt='news24/7' className={styles.img}/></div>
          <h3 className={styles.heading}>News App</h3>
          <p className={styles.description}>In News App, you can read latest news according to the categories. This project created using ReactJS and Bootstrap.</p>
          <div className={styles.linkDiv}>
            {/* <Link href='https://github.com/SatyamGade/News24-7' target='_blank' className={styles.link}>Source Code</Link> */}
            {/* <Link href='https://satyamgade.github.io/News24-7/' target='_blank' className={styles.link}>Visit Website</Link> */}
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={textutils} alt='textUtils' className={styles.img}/></div>
          <h3 className={styles.heading}>Text Utils</h3>
          <p className={styles.description}>In this project, you can manupulate your text. This project created using React JS and Bootstrap.</p>
          <div className={styles.linkDiv}>
            {/* <Link href='https://github.com/SatyamGade/TextUtils' target='_blank' className={styles.link}>Source Code</Link> */}
            {/* <Link href='https://satyamgade.github.io/TextUtils/' target='_blank' className={styles.link}>Visit Website</Link> */}
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={clock} alt='clock&weather' className={styles.img}/></div>
          <h3 className={styles.heading}>World Clock & Weather</h3>
          <p className={styles.description}>In this project, you can check time and wheather of countries. This project created using HTML, CSS and JavaScript.</p>
          <div className={styles.linkDiv}>
            {/* <Link href='https://github.com/SatyamGade/Clock-Weather' target='_blank' className={styles.link}>Source Code</Link> */}
            {/* <Link href='https://satyamgade.github.io/Clock-Weather/' target='_blank' className={styles.link}>Visit Website</Link> */}
          </div>
        </div>


        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={Food} alt='textUtils' className={styles.img}/></div>
          <h3 className={styles.heading}>Food Delivery Website</h3>
          <p className={styles.description}>Built an interactive Food Delivery Website with help of cuttingedge stack like MER</p>
          <div className={styles.linkDiv}>
            {/* <Link href='https://github.com/SatyamGade/TextUtils' target='_blank' className={styles.link}>Source Code</Link> */}
            {/* <Link href='https://satyamgade.github.io/TextUtils/' target='_blank' className={styles.link}>Visit Website</Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
