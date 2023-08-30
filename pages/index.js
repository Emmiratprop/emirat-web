import fetchAPI from "../squidexConectData";
import MainLayout from "../layout/MainLayout";
import { Banner, Menu, Publicidad, Carousel, IconosSliderLanding } from "../components/landingPage";
import queryLanding from "../graphql/landingPage.gql";
import { Grid } from "@mui/material";
import imagen1 from '../public/publicidadLandingPage/publicidad1.jpg'
import imagen2 from '../public/publicidadLandingPage/publicidad2.jpg'


export default function Home({ destacados }) {

  return (
    <MainLayout title='EMIRAT PROPIEDADES'> 
      <Banner />
      <Menu />
      <Grid container paddingLeft={{xs:1.5, sm:10}} paddingRight={{xs:1.5, sm:10}} direction='column' width='100%' height='350vh' alignItems='center' justifyContent='space-around' mt={{xs:10, sm:20}}>
        <Publicidad lugar='centro' link='empresa'/>
        <Publicidad lugar='izquierda' imagen={imagen2} titulo='Servicio Innovador' textoBoton='Ver nuestros inmuebles' link='tienda/todos' 
          texto="En Emirat Propiedades, estamos orgullosos de nuestros valores que nos distinguen. Estamos preparados para ser su primera y más confiable opción en el ámbito inmobiliario." />
        <Carousel destacados={destacados} />  
        <Publicidad lugar='derecha' imagen={imagen1} titulo='Administración' textoBoton='Nosotros te administramos tu propiedad' link='administracion'
          texto="Abarcan una amplia gama de soluciones para el propietario o desarrollador de inmuebles, así como para los ocupantes de los mismos." />
        <IconosSliderLanding />
      </Grid>
    </MainLayout>
  );
}


export async function getServerSideProps() {

  const data = await fetchAPI(queryLanding("data/destacado/iv eq true"))

  return {
    props: {
      destacados: data.queryInmueblesContents
    },
  };
}


