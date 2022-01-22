import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  

  render() {
    return (
      <Html>
        <Head />
        <body  id='body' className='dark dark:bg-[#0b1120] bg-indigo-50'>
            
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}




export default MyDocument