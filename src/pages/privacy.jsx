import Head from "next/head"
import PageTitle from "@/components/common/PageTitle/PageTitle"
const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Cobb Construcion | Privacy</title>
        <meta
          name='description'
          description='Professional steelfixers in Melbourne'
        />
      </Head>
      <PageTitle
        title='Privacy Policy'
      />
      <section className="my-4">

        <h2>Introduction</h2>
        <p className="my-2">
          Welcome to Cobb Construction Engineering Pty website. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
        </p>


      </section>
      <section className="my-4">

        <h2>Information We Collect</h2>
        <p className="my-2">
        <span className="font-bold">Personal information:</span> We may collect personal information such as your name, email address, and phone number when you fill out forms on our website or communicate with us.        </p>
        <p className="my-2">
        <span className="font-bold">Usage Data:</span> We collect information on how you interact with our website, such as your IP address, browser type, pages visited, and the time and date of your visit. </p>

      </section>
    </>

  )
}

export default PrivacyPage