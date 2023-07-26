import Link from "next/link";
import { Grid, IconButton, Typography, useTheme, useMediaQuery, Link as LinkMUI } from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



const Publicidad = ({lugar, imagen="", titulo, textoBoton, texto , link}) => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  return (
    <>
    {lugar === 'centro' &&
    <Grid container direction='column' width={{xs:'90%', sm:'50%'}} justifyContent='center' alignItems='center' textAlign='center' gap={1}>
        <Typography variant="h2" fontStyle='italic' color='primary'>Nuestro objetivo es proporcionar un servicio personal de calidad desde la etapa inicial hasta el final</Typography>
        <Typography variant='p' color='secondary'>Conocenos <Link href={link} passHref><IconButton><ArrowRightAltIcon color="secondary"/></IconButton></Link></Typography>
    </Grid> 
   }
   { lugar !== 'centro' &&
    <Grid container direction={{xs:'column', sm:'row'}} width={{xs:'90%', sm:'100%'}} height={{xs:'min-content', sm:'30rem'}} justifyContent='space-around' alignItems='center' backgroundColor={theme.palette.primary.main} gap={2} p={3}>
        <Grid item xs={2} sm={4} order={ isSmallScreen ? 1 : lugar === 'izquierda' ? 1 : 0} height='90%'>
           <img src={imagen.src} alt={'imagen de publicidad'} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center center' }} />
        </Grid>
        <Grid item xs={2} sm={6}>
            <Typography variant='h2' color='white'>{titulo}</Typography>
            <Typography variant='p' color='white' fontWeight={200} fontSize='15px'>{texto}</Typography>
            <Link href={link} passHref>
              <LinkMUI display='flex' alignItems='center' cursor='pointer' >
                <Typography variant='p' color='secondary'>{textoBoton}</Typography>
                <ArrowRightAltIcon color="secondary"/>
              </LinkMUI>
            </Link>
        </Grid>
        
    </Grid>
   }
   </>
  )
}

export default Publicidad