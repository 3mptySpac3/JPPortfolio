import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

//head
import Head from 'next/head';




function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Jean-Pierre</title>
      <meta name="description" content="Jean-Pierre's Portfolio" />
      <link rel="icon" href='/favicon-32x32.png'/>
    </Head>
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
    </>
  );
}

export default MyApp;
