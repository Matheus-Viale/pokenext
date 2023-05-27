import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href={'/'}>
                        <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext Logo"/>
                        <h1>Poke<span>Next</span></h1>
                    </Link>
                </div>
                <ul className={styles.link_items}>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}