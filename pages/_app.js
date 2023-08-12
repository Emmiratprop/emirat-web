import { AppTheme } from "../theme";
import { Box, CssBaseline } from '@mui/material';
import Head from 'next/head';
import '../index.css'


const MyApp = ({ Component, pageProps }) => {

    return (
        <AppTheme>
        <CssBaseline />
            <Box w='100%' minHeight='100vh' h='max-content'>
                    <Head>
                        <meta name="application-name" content="EMIRAT PROPIEDADES" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                        <meta name="apple-mobile-web-app-capable" content="yes" />
                        <meta name="apple-mobile-web-app-title" content="emirat propiedades" />
                        <meta name="mobile-web-app-capable" content="yes" />
                        <meta property="og:type" content="website" />
                        <meta charSet="utf-8" />
                        <meta name="author" content="AWG" />
                        <meta name="copyright" content="AWG" />
                        <meta name="keywords" content="emirat, emiratpropiedades, propiedades, inmuebles, alquiler, venta " />
                        <meta name="robots" content="index, nofollow, translate" />
                    </Head>
                    <Component {...pageProps} />
                </Box>
        </AppTheme>
    )
}


export default MyApp;
