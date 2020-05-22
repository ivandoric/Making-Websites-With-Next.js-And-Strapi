import {NextSeo} from 'next-seo'

function About() {
    const SEO = {
        title: 'About page',
        description: 'Just your normal about page',

        openGraph: {
            title: 'About page',
            description: 'Just your normal about page',
        }
    }

    return (
        <>
            <NextSeo {...SEO } />
            <h1>I'm an about page</h1>
        </>
    )
}

export default About
