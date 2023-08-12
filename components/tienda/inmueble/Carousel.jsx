import { useState } from 'react';
import Link from 'next/link';
import { Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';



const Carousell = ({ id, imagenes, cantidadImagDesktop }) => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cantidadSegunResponsive = isSmallScreen? 1 : cantidadImagDesktop


    const anterior = () => setSelectedIndex((selectedIndex - cantidadSegunResponsive + imagenes.length) % imagenes.length)
    const siguiente = () => setSelectedIndex((selectedIndex + cantidadSegunResponsive) % imagenes.length);

    const slicedImagen = imagenes?.slice(selectedIndex, selectedIndex + cantidadSegunResponsive);

    return (

      <Grid container direction={{xs:'column', sm:'row'}} width='100%' height='100%' justifyContent='center' alignItems='center'>

        <IconButton onClick={anterior} color='primary'><KeyboardArrowLeft sx={{fontSize:'15px'}}/></IconButton>

        <Grid container width='80%' height='100%' alignItems='center' justifyContent='center'>
        {slicedImagen?.map( (e, index) => ( 
            <Grid item width='100%' height='100%' backgroundColor='white' key={index}>
               <Link href={`/detalle/${id}`} passHref>
                <img src={e?.url} alt='imagen' style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center center'}} cursor='pointer' />
               </Link>
            </Grid>
        ))}
        </Grid>

        <IconButton onClick={siguiente} color='primary'><KeyboardArrowRight sx={{fontSize:'15px'}}/></IconButton>
        
        </Grid> 
    );
 }

export default Carousell;





const TypographyNombre = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: '15px',
  fontWeight: 600,
}));





const TypographyPrecio = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: '15px',
  fontWeight: 600,
}));
