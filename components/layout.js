
import Head from "next/head"
import Header from "./header"   
import Footer from "./footer"
export default function Layout({children,title ='',description='' }) {
  return (
    <>
        <Head>
            <title>{`Guitarra - ${title}`}</title>
            
            <meta name="description" content={description}/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
            <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
        </Head>
        <Header/>
        
        {children}
        <Footer/>
    
    </>
  )
}
