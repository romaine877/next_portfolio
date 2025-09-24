import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

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


