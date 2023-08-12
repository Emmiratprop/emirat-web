import { useRouter } from "next/router";
import IconosItems from "../IconosItems";
// import Maps from "./Maps";
import { Button, Grid, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles';


const DescripcionImagen = ({ id, inmueble }) => {

  const theme = useTheme()  
  const router = useRouter()

  return (
    <>
      <Grid container width='100%' direction='column' mt={2} p={4} backgroundColor='white' gap={{xs:4,sm:2}} boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 8px -3px'> 
        <Grid item width='max-content' pl={0.5} pr={0.5} border={`2px solid ${theme.palette.primary.main}`}>
          <TypographyTransaccion>{inmueble?.tipoTransaccionAlquiler? 'ALQUILER' : 'VENTA'}</TypographyTransaccion>
        </Grid>
        <Grid container direction={{xs:'column', sm:'row'}} justifyContent='space-between' alignItems='center' borderLeft={`3px solid ${theme.palette.secondary.main}`} gap={{xs:2, sm:0}}>
          <TypographyPrecio variant='h2' pl={2}>{inmueble?.precio}  {inmueble?.moneda}</TypographyPrecio>
          <Typography variant='h4' fontWeight={500}>{inmueble?.direccion}</Typography>
        </Grid>
        <Grid container display='flex' flexWrap='wrap' gap={{ xs:2, sm:6 }}> 
         <IconosItems {...inmueble}/>
        </Grid>
      </Grid>

      <Grid container width='100%' direction='column' p={{ xs:2,sm:4 }} backgroundColor='white' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 8px -3px' gap={3}>
        <Grid container direction={{xs:'column',sm:'row'}} width='100%' justifyContent='space-between' gap={{ xs:2,sm:0 }}>
          <Typography variant='h5'>Código de inmueble: {id}</Typography>
          <Button variant="outlined" size="small" onClick={() => router.push(`/contacto?c=alquilar&id=${id}`)}>Contactar</Button>
        </Grid>

        <Grid>
          <Typography variant='h4'>Descripción:</Typography>
          <Typography variant='p'>{inmueble?.descipcion}</Typography>
        </Grid>
        
        <Grid border='1px solid #dfdede'></Grid>

        <Grid container display='flex' flexWrap='wrap' gap={2}> 
         <IconosItems {...inmueble}/>
        </Grid>

        <Typography variant='h5'>Fecha de publicacion: {inmueble?.fechaPublicacion}</Typography>
      </Grid>

      <Grid container direction='column' p={2} backgroundColor='white' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 8px -3px'>
        <Typography variant='h4' fontWeight={600}>Ubicación</Typography>
        <Typography variant='p' fontWeight={400} mt={1}>{inmueble?.direccion}</Typography>
        {/* 
        <Grid mt={2} p={2} border={`3px solid ${theme.palette.primary.main}`} >
           <Maps {...inmueble?.direccionGeolocalizacion} />
        </Grid> 
        */}
      </Grid>
    </>
  )
}

export default DescripcionImagen;




const TypographyTransaccion = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: theme.typography.p.fontFamily,
    fontSize: '20px',
    fontWeight: 400,
  }));
  
  
  const TypographyPrecio = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.h2.fontFamily,
    fontSize: '30px',
    fontWeight: 600,
  }));
  