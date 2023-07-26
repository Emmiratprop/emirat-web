import Buscador from "./Buscador";
import { Grid } from "@mui/material"


const BannerTienda = () => {
  return (
  <Grid container sx={{ backgroundImage: 'url(/banner/bannerLanding.png)', backgroundSize:'cover', backgroundPosition:'center' }} 
    height='20rem' width='100%' alignItems='center'>

  <Grid container justifyContent='center' sx={{ width:'100%', height:'20%' }}>
    <Grid sx={{ backgroundColor:'rgba(30, 30, 30, 0.634)', borderRadius:'20px'}} p={1} width={{xs:'90%', sm:'40%'}}>
      <Buscador/>
    </Grid>
  </Grid>

  </Grid>
  )
}
export default BannerTienda;

