import { useState } from 'react';
import Image from 'next/image';
import { Button, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const Carousell = ({ imagenes, cantidadImagDesktop, onClickImagenSeleccionada }) => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cantidadSegunResponsive = isSmallScreen? 1 : cantidadImagDesktop

    const anterior = () => setSelectedIndex((selectedIndex - cantidadSegunResponsive + imagenes.length) % imagenes.length)
    const siguiente = () => setSelectedIndex((selectedIndex + cantidadSegunResponsive) % imagenes.length);

    const slicedImagen = imagenes?.slice(selectedIndex, selectedIndex + cantidadSegunResponsive);

    return (
      <>
        <IconButton onClick={anterior} color='primary'><KeyboardArrowLeft sx={{fontSize:'15px'}}/></IconButton>

        <Grid container width={{xs:'80%', sm:'90%'}} height='100%' justifyContent='center' alignItems='center'>
        {slicedImagen?.map( (e, index) => ( 
            <Grid display='flex' key={index} width={{xs:'100%', sm:'20%'}} height='100%'>
                <Button onClick={(e) => { onClickImagenSeleccionada(e)} }>
                  <Image src={e?.url} alt='imagen' width={300} height={300}  />
                </Button>
            </Grid>
        ))}
        </Grid>

        <IconButton onClick={siguiente} color='primary'><KeyboardArrowRight sx={{fontSize:'15px'}}/></IconButton>
      </> 
    );
 }

export default Carousell;



