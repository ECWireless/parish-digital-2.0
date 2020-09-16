import Head from 'next/head'

// Components
import Details from '../components/Virtual/Details'
import Description from '../components/Virtual/Description'
import Banner from '../components/Virtual/Banner'
import ContactForm from '../components/Virtual/ContactForm'

const virtual = () => {
    return (
        <>
            <Head>
                <title>Virtual Events | Parish Digital Video Production</title>
            </Head>
            <Details />
            <Description />
            <Banner />
            <ContactForm />
        </>
    )
}

export default virtual
