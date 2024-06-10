import Head from "next/head"
import PageTitle from "@/components/common/PageTitle/PageTitle"
const AboutPage = () => {
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
                title='About us'
            />
            <section className="my-4">

                <h2>Introduction</h2>
                <p className="my-2">
                    Welcome to Cobb Construction Engineering Pty website. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
                </p>


            </section>

        </>

    )
}

export default AboutPage