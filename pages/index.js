import fetchAPI from "../squidexConectData";
import MainLayout from "../layout/MainLayout";
import { Banner, Menu, Publicidad, Carousel, IconosSliderLanding } from "../components/landingPage";
import query from "../graphql/landingPage.gql";
import { Grid } from "@mui/material";
import imagen1 from '../public/publicidadLandingPage/publicidad1.jpg'
import imagen2 from '../public/publicidadLandingPage/publicidad2.jpg'


export default function Home() {

  return (
    <MainLayout title='EMIRAT PROPIEDADES'> 
      <Banner />
      <Menu />
      <Grid container paddingLeft={{xs:1.5, sm:10}} paddingRight={{xs:1.5, sm:10}} direction='column' width='100%' height='350vh' alignItems='center' justifyContent='space-around' mt={{xs:10, sm:20}}>
        <Publicidad lugar='centro' link='empresa'/>
        <Publicidad lugar='izquierda' imagen={imagen2} titulo='Servicio Innovador' textoBoton='Ver nuestros inmuebles' link='tienda/todos' 
          texto={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum, libero autem, earum, temporibus voluptas voluptatem similique officiis unde aut corrupti fuga?. Aspernatur eum doloremque, incidunt ipsum nemo est fugiat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt porro, nemo iste quia quaerat laudantium quod reiciendis, similique sed modi velit mollitia impedit labore voluptas, officia veniam asperiores officiis. orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam minima voluptates mollitia placeat ab, quae expedita dolore repellat sapiente libero nfugit, laborum earum, dicta dignissimos. Quaerat odio dignissimos voluptas"}/>
        <Carousel />  
        <Publicidad lugar='derecha' imagen={imagen1} titulo='Administración' textoBoton='Nosotros te administramos tu propiedad' link='administracion'
          texto="Abarcan una amplia gama de soluciones para el propietario o desarrollador de inmuebles, así como para los ocupantes de los mismos." />
        <IconosSliderLanding />
      </Grid>
    </MainLayout>
  );
}


export async function getStaticProps() {

  const data = await fetchAPI(query)

  return {
    props: {
      
    },
  };
}