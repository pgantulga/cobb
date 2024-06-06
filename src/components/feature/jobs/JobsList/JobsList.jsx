import JobItem from "../JobItem/JobItem"

function JobsList(props) {
    const { jobs } = props
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    jobs.map((job, index) => (
                        <JobItem
                            key={job.id}
                            id={job.id}
                            name={job.name}
                            description={job.description}
                            imageUrl={job.imageUrl}
                        />
                    ))
                }
            </div>



        </div>
    )
}

export default JobsList