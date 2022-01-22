import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id='pls' className='dark'>
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
