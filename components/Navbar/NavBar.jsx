import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import logo from "../../public/logo.png"
import { Box, Grid } from "@mui/material";
import { heightNavbar } from "../../layout/MainLayout";




const NavBar = () => {

  const { pathname } = useRouter()

  const pathnameNO = ["/", "/tienda" ]
  const pathname2 = pathnameNO.includes(pathname)


  const menuStyles = {
    position: 'absolute',
    top: 0,
    backgroundColor: `${pathname2 === false ? '#FFF' :'none' }`,
    boxShadow: `${pathname2 === false ? 'rgba(50, 50, 93, 0.25) 0px 2px 8px -3px' :'none' }`,  
    zIndex: 100
  };


  return (
   <Grid container sx={{ width: '100%', minHeight:`${heightNavbar}rem`, height:'max-content'}} justifyContent='center' alignItems='center' 
    component='header' style={menuStyles} px={4} py={2}>

    <Grid item xs={4} sm={1.5} width={{xs:'0rem', sm:'1rem'}} height='0%'> 
      <Link href={'/'}>
        <Box width='100%' height="100%">
          <Image src={logo} alt='logo' w='100%' style={{cursor:'pointer'}}/>
        </Box>
      </Link>
    </Grid>

    {/* Menu para Desktop */}
    <Grid item sm={10} height='0%' display={{xs:'none', sm:'flex'}}  component='nav'>
      <MenuDesktop />
    </Grid>
      
    {/* Menu para movile */}
    <Grid item xs={8} justifyContent='end' display={{xs:'flex', sm:'none'}} component='nav'>
      <MenuMobile />
    </Grid>

   </Grid>
  );
};

export default NavBar;