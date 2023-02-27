import styles from './Navbar.module.css'
import Link from 'next/link'


export default function Navbar(){
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navlists}>
          <li className={styles.navitem}>
            <Link href='/'>Home</Link>
         </li>
          <li className={styles.navitem}>
            <Link href='/todosapp'>To Do App</Link>
         </li>
        </ul>
      </nav>
  )
}

