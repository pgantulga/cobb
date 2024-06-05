import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Head from 'next/head'
const HomePage = () => {
  return (
    <>
      <Head>
        <title>Cobb Construcion | Home</title>
        <meta 
          name='description'
          description='Professional steelfixers in Melbourne'
        />
      </Head>
      <Hero
        title='Proffessional Steelfixers'
        description = 'We specializes in reinforcement fixing for civil, commercial, infrastructure and residential developments across Australia.'
        bgImage="/background.webp"
      ></Hero>
    </>
  )
}
export default HomePage