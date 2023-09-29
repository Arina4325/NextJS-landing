"use client" 
import Link from "next/link";
import styles from "./page.module.css";



const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
  ];



const Navbar = () => {
  return (
    <nav className={styles.container}>
  
        <Link href="/" className={styles.logo}>  COMPANY NAME  </Link>
      <div className={styles.links}>
        {links.map((link)=> (
        <Link key={link.id} href={link.url}>{link.title}</Link>

          ))}
      </div>

    </nav>
  
  )
}

export default Navbar