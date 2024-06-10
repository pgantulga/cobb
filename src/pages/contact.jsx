import Head from "next/head"
import PageTitle from "@/components/common/PageTitle/PageTitle"
const ContactPage = () => {
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
                title='Contact us'
            />
            <h2 className="my-2">Contact information:</h2>
            <p><span className="font-bold">Tel:</span> 04-76xxxxxxx</p>
            

        </>

    )
}

export default ContactPage;