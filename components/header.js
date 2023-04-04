import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
export default function Header() {
    const router = useRouter()
    console.log(router)
    return (
    <header className={styles.header}>
        <div className="contenedor">
            <Link href="/">
                <Image src="/img/logo.svg" width={400} height={300} alt="Logo de Guitarra"/>
            </Link>
              <nav className={styles.navegacion}>
                <Link className={`${styles.enlace} ${router.pathname === "/" ? styles.active: ''}`} href="/">Inicio</Link>
                <Link className={`${styles.enlace} ${router.pathname === "/nosotros" ? styles.active: ''}`} href="/nosotros">Nosotros</Link>
                <Link className={`${styles.enlace} ${router.pathname === "/blog" ? styles.active: ''}`} href="/blog">Blog</Link>
                <Link className={`${styles.enlace} ${router.pathname === "/tienda" ? styles.active: ''}`} href="/tienda">Tienda</Link>
            </nav>

        </div>
    </header>

  )
}
