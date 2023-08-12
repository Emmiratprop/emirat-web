import { useRouter } from 'next/router';
import DescripcionImagen from '../../components/detalle/DescripcionImagen';
import MainLayout, { heightViews } from '../../layout/MainLayout';
import queryInmueble from '../../graphql/detalle.gql';
import fetchAPI from '../../squidexConectData';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Grid, IconButton, Typography } from '@mui/material'
import EmblaCarousel from '../../components/detalle/EmblaCarousel';


const Detalle = ({ inmueble }) => {

  const { id, flatData } = inmueble
  const router = useRouter()

  let tipoTransaccion = ""
  flatData?.tipoTransaccionAlquiler ? tipoTransaccion='alquilar' : tipoTransaccion='comprar'

  return (
    <MainLayout>
    <Grid container width='100%' maxHeight='max-content' height='max-content' direction='column' mt={`${heightViews}rem`} px={{xs:0, sm:10}} gap={4}>

      <Grid container width='100%' h='max-content' direction='row' justifyContent='center' alignContent='center' gap={{xs:2, sm:8}}>
        <TypographyTitulo alignContent='center'>{flatData?.nombre}</TypographyTitulo>
        <Grid direction='row' alignItems='center' mt='1rem'>
          <IconButton><CircleIcon sx={{ color: flatData?.estado === 'Disponible' ? '#2FBF01' : '#bf5001', fontSize:'12px'}}/></IconButton>
          <Typography variant='p'>{flatData?.estado}</Typography>
        </Grid>
      </Grid>

      <Grid container direction='column' width='100%' mt='2rem' height='35rem' justifyContent='center' alignItems='center'>
       <EmblaCarousel imagenesProp={flatData}/>
      </Grid>

      <DescripcionImagen id={id} inmueble={flatData}/>

      <Button variant="contained" size="large" onClick={() => router.push(`/contacto?c=${tipoTransaccion}&id=${id}`)}>Contactar</Button>

    </Grid>
    </MainLayout>
  )
}

export default Detalle




export async function getServerSideProps(context) {

  const { params } = context;
  const id = params.id;

  const data = await fetchAPI(queryInmueble(id))

  return {
    props: {
      inmueble: data?.findInmueblesContent,
    },
  };
}






const TypographyTitulo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: '40px',
  fontWeight: 600,
}));

