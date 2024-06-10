import JobDetail from '@/components/feature/jobs/JobDetail/JobDetail';
import Head from 'next/head';

function JobDetailPage(props) {
    // const { job } = props;

    return (
        <>
            <Head>
                {/* <title>{`Cobb | ${job.name}`}</title> */}
                <meta
                    name='description'
                    // description={job.description}
                />
            </Head>
            {/* <JobDetail
                imageUrl={job.imageUrl}
                name={job.name}
                description={job.description}
                location={job.location}
            /> */}
        </>
    );
}

// export const getStaticPaths = async () => {

//     const response = await fetch(`${process.env.SERVER_NAME}/api/jobs`);
//     const jobs = await response.json();

//     const idList = jobs.map((job) => job.id);

//     const paths = idList.map((id) => (
//         { params: { jobId: id.toString() } }
//     ));

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const response = await fetch(`${process.env.SERVER_NAME}/api/jobs`);
//     const jobs = await response.json();

//     const jobQuery = context.params.jobId;

//     const jobMatch = jobs.filter(
//         (job) => job.id.toString() === jobQuery
//     )

//     return {
//         props: {
//             job: jobMatch[0]
//         },
//     };
// };

export default JobDetailPage;