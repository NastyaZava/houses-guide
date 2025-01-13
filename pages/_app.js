import "@/styles/globals.css"
// import "@/styles/fonts.css"
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Гид по дому</title>
        <meta name="description" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
