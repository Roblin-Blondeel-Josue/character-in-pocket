import Head from 'next/head';
import Header from '../component/Header';
import Sheet from '../component/Sheet';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Sheet />
      </main>
    </div>
  );
}
