import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";


export const metadata = {
  title: 'About us',
  description: "Description for SEO",
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={Hero}
          fill={true}
          alt="about us"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Your text</h1>
          <h2 className={styles.imgDesc}>
          Your expressive text is here!
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          Example: Allow me to tell you about an exciting live band in Israel that combines elements of pop, rock, and global dance hits. Nice to meet you - The Cheeers Band! This band is a true explosive cocktail of energy and talent. Each member of the group is a virtuoso with their instrument and performs music with impeccable skill. Guitar riffs are fueled by rock drive, the rhythm section makes hearts beat in sync, and the keyboards create a magical atmosphere! However, their music is just part of their show. The band not only sounds amazing but also transforms the stage into a true dance epicenter. Their charismatic vocalist captivates the audience with their emotional performances!
            <br />
            <br />
            Example: Each performance by this band is a journey into the world of music, dance, and non-stop fun! Their silhouettes, enveloped in light and sound, become a symbol of explosive energetic entertainment!
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          Example: Each performance by this band is a journey into the world of music, dance, and non-stop fun! Their silhouettes, enveloped in light and sound, become a symbol of explosive energetic entertainment!
            <br />
            <br /> - Concerts in music bars, nightclubs in pop, funk, rock, soul styles
            <br />
            <br /> - Musical meeting of guests at your event
            <br />
            <br /> - Incendiary dance programs
          </p>
          <Button url="/contact" text="Contact us" />
        </div>
      </div>
    </div>
  );
};

export default About;