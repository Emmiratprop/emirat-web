import IconosItems from "../../IconosItems";
import Carousell from "./Carousel";
import { Button, Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";


const Inmueble = ({ total, items }) => {

  const router = useRouter()
  
 return (
  <>
  <Typography variant="h4" fontWeight={600} textAlign={{xs:'center', sm:'start'}} mb={{xs:'2rem',sm:'1rem'}}>{total} Inmuebles totales</Typography>

  <Grid container direction='column' gap={4} mt={2}>

  { (total != 0) && items?.map( p => (
    <Grid container key={p?.id} direction={{xs:'column', sm:'row'}} width='95%' height={{xs:'max-content', sm:'19rem'}} justifyContent={{xs:'start', sm:'space-between'}} 
      alignItems='center' backgroundColor='white' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}}>

      <Grid container width={{xs:'100%', sm:'45%'}} height={{xs:'15rem', sm:'100%'}} justifyContent='center'>
        <Carousell {...p?.flatData} id={p?.id} cantidadImagDesktop={1}/>
      </Grid>

      <Grid container direction='column' width={{xs:'90%', sm:'55%'}} height={{xs:'',sm:'100%'}} p={2}>
        <Grid container width={{xs:'100%', sm:'100%'}} direction='column' p={2} gap={{xs:3,sm:1}}>
        <Grid container width='100%' direction={{xs:'column', sm:'row'}} alignItems='center' justifyContent='space-between'>
          <TypographyPrecio onClick={() => router.push(`/detalle/${p?.id}`)} style={{cursor:'pointer'}}>$ {p?.flatData.precio} {p?.flatData.moneda}</TypographyPrecio>
          <Grid alignItems='center' justifyContent='center' onClick={() => router.push(`/detalle/${p?.id}`)} style={{cursor:'pointer'}}>
          { p?.flatData.tipoTransaccionAlquiler && <TypographyTransaccion>ALQUILER</TypographyTransaccion> }
          { p?.flatData.tipoTransaccionVenta && <TypographyTransaccion>VENTA</TypographyTransaccion> }
          </Grid>
        </Grid>
        <Grid container direction='column'>
          <Typography variant='p' fontWeight={700}>{p?.flatData.direccion}</Typography>
          <Typography>{p?.flatData.nombre}</Typography>
        </Grid>

          <Grid container width='100%' direction={{xs:'column', sm:'row'}} justifyContent='space-between'> 
            <Grid item w='50%'><IconosItems {...p?.flatData} /></Grid>
            <Grid item w='30%' alignSelf={{xs:'center', sm:'end'}} mt={{xs:'1rem', sm:0}}>
              <Button variant="contained" size="large" onClick={() => router.push(`/contacto?c=${p?.flatData.tipoTransaccionAlquiler?'alquilar':'comprar'}&id=${p?.id}`)}>Contactar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
    ))
  }
  </Grid>
  </>
  )
}

export default Inmueble;




const TypographyPrecio = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: '38px',
  fontWeight: 600
}));



const TypographyTransaccion = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.p.fontFamily,
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: 400,
  paddingLeft:  4,
  paddingRight:  4,
  border: `1px solid ${theme.palette.primary.main}`
}));
