import JobDetail from '@/components/feature/jobs/JobDetail/JobDetail';
import Head from 'next/head';

function JobDetailPage(props) {
    const { job } = props;

    return (
        <>
            <Head>
                <title>{`Cobb | ${job.name}`}</title>
                <meta
                    name='description'
                    description={job.description}
                />
            </Head>
            <JobDetail
                imageUrl={job.imageUrl}
                name={job.name}
                description={job.description}
                location={job.location}
            />
        </>
    );
}

// STATIC SITE DYNAMIC PATHS (snippet: "ngspa")
export const getStaticPaths = async () => {
    // (a) Fetches ENTIRE articles array from INTERNAL API

    const response = await fetch(`${process.env.SERVER_NAME}/api/jobs`);
    const jobs = await response.json();

    // (b) Pull ALL the ids out of the articles array ONLY
    const idList = jobs.map((job) => job.id);

    // (c) Pre-build ALL the URL paths for all existing ids in array 
    const paths = idList.map((id) => (
        { params: { jobId: id.toString() } }
    ));
    // NOTE: The id MUST be converted to a string, as URLs need strings NOT numbers!

    return {
        paths,
        fallback: false
    }
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async (context) => {
    // (a) Fetches ENTIRE articles array from INTERNAL API
    const response = await fetch(`${process.env.SERVER_NAME}/api/jobs`);
    const jobs = await response.json();

    // (b) Store params id value (article USER wants!)
    const jobQuery = context.params.jobId;

    // (c) Filters articles array to match & return article passed in params
    const jobMatch = jobs.filter(
        (job) => job.id.toString() === jobQuery
    )

    return {
        props: {
            job: jobMatch[0]
        },
    };
};

export default JobDetailPage;