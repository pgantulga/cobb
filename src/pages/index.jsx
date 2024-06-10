import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Head from 'next/head'
import JobsList from "@/components/feature/jobs/JobsList/JobsList";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
const HomePage = (props) => {
  const { jobs } = props;
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
        description='We specializes in reinforcement fixing for civil, commercial, infrastructure and residential developments across Australia.'
        bgImage="/background.webp"
      ></Hero>
      <SectionTitle
        title="Latest jobs"
      />
      {jobs.length > 0 &&
        <JobsList
          jobs={jobs}
        />
      }

    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.SERVER_NAME}/api/jobs`);
  const data = await response.json();
  return {
    props: {
      jobs: data
    },
    revalidate: 60 * 60
  };
};
export default HomePage