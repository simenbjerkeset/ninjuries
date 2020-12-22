import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninjuries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 className="text-center text-6xl mt-16 font-body font-bold">Ninjuries</h1>
        </div>
      </main>
    </div>
  )
}
