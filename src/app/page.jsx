import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
      Name of your product
      </h1>
      <p className={styles.desc}>
      Text example: If you're looking for unforgettable musical experiences that combine pop, rock, and global dance hits, this band is the perfect choice for you. They will make you dance, sing, and experience emotions you never knew you had. Join this unique music wave and immerse yourself in a world of sounds and rhythms that will never leave you indifferent!
      </p>
    </div>
    <div className={styles.item}>
      <Image src={Hero} alt='main photo' className={styles.img}/> 
      <p><Button url="/contact" text="Contact us" /></p>
    </div>
    </main>
     )
}