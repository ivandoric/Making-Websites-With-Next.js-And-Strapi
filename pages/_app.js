import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps, navigation }) {
    console.log(navigation)

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header navigation={navigation}/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    return { navigation }
}

export default MyApp
