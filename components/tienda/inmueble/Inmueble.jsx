import { useRouter } from "next/router";
import IconosItems from "../../IconosItems";
import { Fragment } from "react";
import Carousell from "./Carousel";
import { Button, Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';



const Inmueble = () => {

  const router = useRouter()

return (
  <>
  <Typography variant="h4" fontWeight={600}>Inmuebles totales</Typography>

  <Grid container direction='column' gap={4} mt={2} >
      
  {/* <Grid><Button variant="contained"><ClearIcon size='small'/></Button></Grid> */}

  {/* { ok && inmuebles?.map( p => (
    <Grid container key={p.id} direction={{xs:'column', sm:'row'}} width={{xs:'95%', sm:'90%'}} minHeight={{xs:'15rem', sm:'16rem'}} height={{xs:"max-content", sm:"15rem"}} justifyContent={{xs:'center', sm:'space-between'}} 
      alignItems='center' backgroundColor='white' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}}>

      <Grid container width={{xs:'100%', sm:'45%'}} height={{xs:'15rem', sm:'100%'}} justifyContent={{xs:'center', sm:'center'}}><Carousell p={p} cantidadImagDesktop={1}/></Grid>
      <Grid container direction='column' width={{xs:'90%', sm:'55%'}} height='100%'>
        <Grid container width={{xs:'100%', sm:'100%'}} direction='column' p={2} gap={{xs:3,sm:1}}>
          <Grid container width='100%' direction='column'>
            <Grid container width='100%' direction={{xs:'column', sm:'row'}} alignItems='center' justifyContent='space-between'>
              <TypographyPrecio>$ {p.precio} {p.moneda} {p.id}</TypographyPrecio>
              { p.categoria.map( c => <Fragment key={c.id}><TypographyCategoria>{c.nombre.toUpperCase()}</TypographyCategoria></Fragment>) }
            </Grid>
            <Grid container direction='column'>
              <Typography variant='p' fontWeight={700}>{p.direccion}</Typography>
              <Typography>{p.nombre}</Typography>
            </Grid>
          </Grid>

          <Grid container direction={{xs:'column', sm:'row'}} width='100%' gap={{xs:2,sm:0}}> 
            <Grid item xs={12} sm={8}><IconosItems p={p} /></Grid>
            <Grid item xs={12} sm={4} alignSelf={{xs:'center', sm:'end'}}>
              <Button variant="contained" size="large" onClick={() => router.push('/contacto')}>Contactar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
    ))
  } */} 
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



const TypographyCategoria = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.p.fontFamily,
  fontSize: '15px',
  fontWeight: 400,
  paddingLeft:  4,
  paddingRight:  4,
  border: `1px solid ${theme.palette.primary.main}`
}));
