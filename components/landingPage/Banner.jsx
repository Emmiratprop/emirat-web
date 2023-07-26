import Link from "next/link";
import { Grid, Typography, useTheme, useMediaQuery, Link as LinkMUI } from "@mui/material"
import { styled } from '@mui/material/styles';



const Banner = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints
  
  return (
    <Grid container sx={{ backgroundImage: 'url(/banner/bannerLanding.png)', backgroundSize:'cover', backgroundPosition:'center' }} height={{xs:'100vh', sm:'100vh'}} width='100%'>

    <Grid container sx={{ backgroundColor:'rgba(30, 30, 30, 0.5)', width:'100%', height:'100%' }}>
      <Grid container direction='column' alignItems='center' justifyContent='center' gap={1}>
        <TypographyLink sx={{ fontSize: isSmallScreen ? '35px' : '50px'}}>Hacemos realidad tu sueño</TypographyLink>
        <Typography2Link sx={{ fontSize: isSmallScreen ? '18px' : '28px'}}>Contactanos para más información</Typography2Link>
        <Link href='/contacto' passHref>
         <LinkStyle>Contactanos</LinkStyle>
        </Link>
      </Grid>
    </Grid>

    </Grid>
  )
}
export default Banner;




const TypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: 600,
  textAlign:'center'
}));


const Typography2Link = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: 300,
  textAlign:'center'
}));


const LinkStyle = styled(LinkMUI)(({ theme }) => ({
  textDecoration: 'none',
  width: 'max-content',
  padding: '0.5%',
  cursor: 'pointer',
  color: 'white',
  fontFamily: theme.typography.h1.fontFamily,
  border: '2px solid white',
  '&:hover': {
    textDecoration:'none',
    backgroundColor: '#eae6e67e',
    border: '2px solid white',
  },
}));