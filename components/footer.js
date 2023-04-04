import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
       
            <nav className={styles.navegacion}>
                <Link className={styles.enlace} href="/">Inicio</Link>
                <Link className={styles.enlace} href="/nosotros">Nosotros</Link>
                <Link className={styles.enlace} href="/blog">Blog</Link>
                <Link className={styles.enlace} href="/tienda">Tienda</Link>
            </nav>
            <p>Todos los derechos reservados {new Date().getFullYear()}</p>
    </footer>
  )
}

