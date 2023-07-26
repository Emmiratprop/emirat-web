import { Link } from "@mui/material";
import { Grid, Link as MUILink, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';



const Navegacion = () => {
  return (
<Grid mt='5px'>
  <Grid><MUILink component={Link} to={'/'}><StyledTypographyLink>HOME</StyledTypographyLink></MUILink></Grid>
  <Grid><MUILink component={Link} to={'/tienda'}><StyledTypographyLink>INMUEBLES</StyledTypographyLink></MUILink></Grid>
  <Grid><MUILink component={Link} to={'/tienda?c=alquiler'}><StyledTypographyLink>ALQUILER</StyledTypographyLink></MUILink></Grid>
  <Grid><MUILink component={Link} to={'/tienda?c=comprar'}><StyledTypographyLink>COMPRAR</StyledTypographyLink></MUILink></Grid>
  <Grid><MUILink component={Link} to={'/administracion'}><StyledTypographyLink>ADMINISTRACION</StyledTypographyLink></MUILink></Grid>
  <Grid><MUILink component={Link} to={'/nosotros'}><StyledTypographyLink>NOSOTROS</StyledTypographyLink></MUILink></Grid>
  <Grid><MUILink component={Link} to={'/contacto'}><StyledTypographyLink>CONTACTO</StyledTypographyLink></MUILink></Grid>
</Grid>
  )
}

export default Navegacion;



const StyledTypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h4.fontFamily,
  fontWeight: 200,
  fontSize: '12px'
}));