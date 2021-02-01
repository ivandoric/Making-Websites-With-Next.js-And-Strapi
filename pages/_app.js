import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { DefaultSeo } from 'next-seo'
import ContextWrapper from 'components/ContextWrapper'
import { appWithTranslation } from '../i18n'
import Router from 'next/router'
import { parseCookies  } from 'nookies'
import {QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()


import SEO from '../next-seo.config'

function MyApp({ Component, pageProps, navigation }) {
    console.log(navigation)

    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <ContextWrapper navigation={navigation}>
                    <Header />
                </ContextWrapper>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </ThemeProvider>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        Router.push(location);
    }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {}
    const jwt = parseCookies(ctx).jwt

    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    if (!jwt) {
        if (ctx.pathname === "/payed-articles") {
            redirectUser(ctx, "/login");
        }
    }

    return {
        pageProps,
        navigation
    }
}

export default appWithTranslation(MyApp)
