import "@/styles/globals.css"
// import "@/styles/fonts.css"
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Skranji:wght@400;700&family=Sofia+Sans+Semi+Condensed:ital,wght@0,1..1000;1,1..1000&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap"
          rel="stylesheet"></link>
        <title>Гид по дому</title>
        <meta name="description" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
