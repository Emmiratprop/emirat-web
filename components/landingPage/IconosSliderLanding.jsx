import { Grid, Typography, Link as LinkMUI } from "@mui/material"
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyIcon from '@mui/icons-material/Key';
import Link from "next/link";


const IconosSliderLanding = () => {
  return (
    <Grid container width='100%' minHeight='20rem' justifyContent='center' p={8}>
    <Grid container width='100%' direction={{xs:'column', sm: 'row'}}  justifyContent='space-around' alignItems='center' gap={2} >

      <GridIcon>
       <Link href='/tienda/todos' passHref><LinkStyle><HomeIcon sx={{fontSize:'45px'}}/></LinkStyle></Link>
       <TypographyStyle>INMUEBLES</TypographyStyle>
      </GridIcon>

      <GridIcon>
      <Link href='/tienda/alquiler' passHref><LinkStyle><MapsHomeWorkIcon sx={{fontSize:'45px'}}/></LinkStyle></Link>
       <TypographyStyle>ALQUILER</TypographyStyle>
      </GridIcon>

      <GridIcon>
      <Link href='/tienda/comprar' passHref><LinkStyle><AttachMoneyIcon sx={{fontSize:'45px'}}/></LinkStyle></Link>
       <TypographyStyle>COMPRAR</TypographyStyle>
      </GridIcon>


      <GridIcon>
      <Link href='/administracion' passHref><LinkStyle><KeyIcon sx={{fontSize:'45px'}}/></LinkStyle></Link>
       <TypographyStyle>ADMINISTRACION</TypographyStyle>
      </GridIcon>

    </Grid>
    </Grid>
  )
}

export default IconosSliderLanding



const LinkStyle = styled(LinkMUI)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    cursor: 'pointer',
    width:'5rem',
    height:'5rem',
    borderRadius: '100px',
    border: `2px solid ${theme.palette.primary.main}`,
    BorderRadidus: '90px',
    color: theme.palette.primary.main,
    padding:'10px',
  }));
  


const TypographyStyle = styled(Typography)(({ theme }) => ({
    cursor: 'pointer',
    fontFamily: theme.typography.h3.fontFamily,
    fontWeight: 400,
    fontSize: '18px',
    color: theme.palette.primary.main,
  }));



const GridIcon = styled(Grid)(({ theme }) => ({
    display:'flex',
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center'
  }));