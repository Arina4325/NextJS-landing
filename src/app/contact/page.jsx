import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";


export const metadata = {
  title: "Contacts",
  description: "Description for SEO",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Hero}
            alt="contacts"
            fill={true}
            className={styles.image}
          />
        </div>
        


        <div className={styles.content}>
        Call us: 000-000-00-00
        <br/>
        <br/>
        Mail: test@test.com 
        <br/>
        <br/>
        WhatsUp: +000-00-000-00
        <br/>
        <br/>
        Telegram: +000-00-000-00


        </div>
        </div> 
        </div>
  );
};

export default Contact;