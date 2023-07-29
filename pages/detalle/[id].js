nhaimport { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Carousell from '../../components/detalle/Carousel';
import DescripcionImagen from '../../components/detalle/DescripcionImagen';
import MainLayout, { heightViews } from '../../layout/MainLayout';
import queryInmueble from '../../graphql/detalle.gql';
import fetchAPI from '../../squidexConectData';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Grid, IconButton, Typography } from '@mui/material'




const Detalle = ({ inmueble }) => {

  const { id, flatData } = inmueble

  const router = useRouter()

  const [imagenSeleccionada, setimagenSeleccionada] = useState("")

  const onClickImagenSeleccionada = (event, e) => {
    // console.log(event.target.value)
    // console.log(e)
  }

  return (
    <MainLayout>
    <Grid container width='100%' maxHeight='max-content' height={{xs:'160rem', sm:'max-content'}} direction='column' mt={`${heightViews}rem`} px={{xs:0, sm:10}}>

      <Grid container width='100%' h='max-content' display='flex' flexDirection={{xs:'column', sm:'row'}} justifyContent='center' alignContent='center' gap={{xs:6, sm:8}}>
        <TypographyTitulo alignContent='center'>{flatData?.nombre}</TypographyTitulo>
        <Grid display='flex' flexDirection='row' alignItems='center'>
          <IconButton><CircleIcon sx={{ color: flatData?.estado === 'Disponible' ? '#2FBF01' : '#bf5001', fontSize:'12px'}}/></IconButton>
          <Typography variant='p'>{flatData?.estado}</Typography>
        </Grid>
      </Grid>

      <Grid container direction='column' width='100%' height='100%' justifyContent='center' alignItems='center'>
        <Grid container width={{xs:'100%', sm:'50%'}} height={{xs:'50%',sm:'25rem'}} justifyContent='center' alignItems='center'>
          <Image src={flatData?.imagenes[2]?.url} alt='imagen' width={700} height={400} />
        </Grid>

        <Grid container direction='row' width={{xs:'100%', sm:'90%'}} height='15rem' justifyContent='center' alignItems='center'>
          <Carousell {...flatData} cantidadImagDesktop={5} onClickImagenSeleccionada={onClickImagenSeleccionada} />
        </Grid>
      </Grid>

      <DescripcionImagen id={id} inmueble={flatData}/>

      <Button variant="contained" size="large" onClick={() => router.push(`/contacto?c=alquilar&id=${id}`)}>Contactar</Button>

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

