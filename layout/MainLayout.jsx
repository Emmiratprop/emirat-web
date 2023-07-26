import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Grid } from "@mui/material";


export const heightNavbar = 4
export const heightFooter = 6
export const heightViews = heightNavbar + 5




const MainLayout = ({title, children}) => {


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="EMIRAT PROPIEDADES"/>
        <meta charSet="utf-8" />
        <meta name="keywords" content="emirat propiedades, emirat, propiedades, inmuebles, alquiler, venta" />
        {/* <meta id="ogtitle" property="og:title" content={data.queryCategoryContents[0].data.name[lang].toUpperCase()} /> */}
        {/* <meta id="webapptitle" name="apple-mobile-web-app-title" content={data.queryCategoryContents[0].data.name[lang].toUpperCase()} /> */}
        {/* <meta id="ogsitename" property="og:site_name" content={targetTitle?.iv ? targetTitle.iv : "AWG LIFESTYLES TV"} /> */}
        {/* <meta id="appname" name="application-name" content={targetTitle?.iv ? targetTitle.iv : "AWG LIFESTYLES TV"} /> */}
        {/* <link id="icon16" rel="shortcut icon" sizes="16x16" href={icons[0]?.targetIcon16 ? 'https://cms.awg.digital/api/assets/awg-fitness/${icons[0].targetIcon16[0]}' : ${router.basePath}/icon-16x16.png} />
        <link id="icon196" rel="shortcut icon" sizes="196x196" href={icons[0]?.targetIcon196 ? 'https://cms.awg.digital/api/assets/awg-fitness/${icons[0].targetIcon196[0]}' : ${router.basePath}/icon-196x196.png} />
        <link id="iconapple" rel="apple-touch-icon-precomposed" href={icons[0]?.targetIcon196 ? 'https://cms.awg.digital/api/assets/awg-fitness/${icons[0].targetIcon196[0]}' : ${router.basePath}/icon-196x196.png} />
        <link id="icon120" rel="apple-touch-icon" sizes="120x120" href={icons[0]?.targetIcon120 ? 'https://cms.awg.digital/api/assets/awg-fitness/${icons[0].targetIcon120[0]}' : ${router.basePath}/icon-120x120.png} />
        <link id="icon152" rel="apple-touch-icon" sizes="152x152" href={icons[0]?.targetIcon152 ? 'https://cms.awg.digital/api/assets/awg-fitness/${icons[0].targetIcon152[0]}' : ${router.basePath}/icon-152x152.png} /> */}
        {/* <meta id="themeColor" name="theme-color" content={mainColor?.iv} /> */}
        {/* <meta id="navColor" name="msapplication-navbutton-color" content={mainColor?.iv} /> */}
        {/* <meta id="statusBarColor" name="apple-mobile-web-app-status-bar-style" content={mainColor?.iv} /> */}
      </Head>

      <Grid container >
        <NavBar />

        <Grid container justifyContent="space-around" alignItems='center' 
        sx={{minHeight:'31rem', height:'max-content', width:'100%'}} pb='5rem' backgroundColor='#F8F8F8' >
          {children}
        </Grid>

        <Footer /> 
      </Grid>  

    </>
  );
};

export default MainLayout;
