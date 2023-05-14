import Head from 'next/head';

import ContactForm from "../components/contact/contact-form";

function ContactPage(){
    return <>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Contact page"/>
        </Head>
        <ContactForm/>;
    </>
}

export default ContactPage;