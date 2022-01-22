import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
  return(
    <div>
      {/* <Image src="/images/bk.jpg" alt="Romaine Halstead" layout='fill' objectFit='cover' className="h-full w-full object-cover z-0 bg-opacity-10" /> */}
     
        
      
        <div className='max-w-7xl mx-auto relative h-screen'>
      
        <Head>
            <title>Romaine Halstead - {title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name='description' content='Portfolio of Romaine Halstead' />
            <meta name='keywords' content='portfolio, react, javascript, html, css' />
        </Head>
        <Navbar/>
        
        {children}
        <Footer/>
    </div>
      
    
      
    
      </div>
  )
}
