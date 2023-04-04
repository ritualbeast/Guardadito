import Layout from "./layout"
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'
export default function ListadoGuitarras({guitarra}) {
  
  const { albumId, title, url } = guitarra
  
  return (
    <div className={styles.guitarra}>
      
      <Image src={
        url
      } width={300} height={200} alt={`Imagen guitarra ${title}`} />
      <div>
        <h3 className={styles.descripcion}>{title}</h3>
        <Link className={styles.enlace} href={`/guitarra/${url}`}>
          Ver más
        </Link>
      </div>
      
    </div>
    
  )
}
