
import Layout from "@/components/layout"
import ListadoGuitarras from "@/components/listado-guitarras"
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {

  console.log(guitarras)
  return (
    <Layout
    title={'Tienda'}
    description={'Tienda virtual de guitarras'}
    >
        <main className="contenedor">
            <h1 className="heading">Tienda</h1>
            <div className={styles.grid}>
              
            
            {guitarras?.map(guitarra => (
          <ListadoGuitarras key={guitarra.id} guitarra={{ albumId: guitarra.albumId, title: guitarra.title, url: guitarra.url  }} />


            ))}
           </div>
            <p>In suscipit tincidunt justo, quis faucibus neque pulvinar in. Maecenas lacus libero, imperdiet id urna nec, fringilla euismod sem. In aliquet molestie sapien, aliquam interdum ipsum mollis et. Suspendisse interdum dictum pretium. Vivamus vel hendrerit est. Maecenas non accumsan enim. Aliquam faucibus nisl non erat mattis facilisis. Integer suscipit lobortis lectus id sollicitudin. </p>
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const guitarras = await res.json()

  return {
    props: {
      guitarras
    }
  }
}
