import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
  return(
    <div>
      
        <div className='max-w-7xl mx-auto relative h-screen flex flex-col justify-between'>
      
        <Head>
            <title>Romaine Halstead - {title}</title>
            <link rel="icon" href="/images/react.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            
            <meta name='description' content='Portfolio of Romaine Halstead' />
            <meta name='keywords' content='portfolio, react, javascript, html, css, flutter' />
            <meta name='author' content='Romaine Halstead' />

        </Head>
        <Navbar/>
        
        {children}
        <Footer/>
    </div>
      
    
      
    
      </div>
  )
}
