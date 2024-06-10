import Head from "next/head"
import PageTitle from "@/components/common/PageTitle/PageTitle"
import JobsList from "@/components/feature/jobs/JobsList/JobsList"
const AboutPage = (props) => {
    const {jobs} = props;
    return (
        <>
            <Head>
                <title>Cobb Construcion | About</title>
                <meta
                    name='description'
                    description='Professional steelfixers in Melbourne'
                />
            </Head>
            <PageTitle
                title='Our jobs'
            />
            <section className="my-4">
                <p className="my-2">
                    No job is too big or too smallfor
                    us, we have completed extensive
                    projects from 50 to 3000 Tones.                </p>
            </section>

            {jobs.length > 0 &&
                <JobsList
                    jobs={jobs}
                />
            }

        </>

    )
}

export default AboutPage;

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
