import { useRouter } from "next/router";
import Link from "next/link";
import { item } from "../itemsNavBar";
import { Stack, Grid, Link as LinkMUI } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import 'animate.css';


const MenuDesktop = () => {

 const { pathname, route } = useRouter()
 const { palette } = useTheme()

 return (
  <Grid container direction='row' justifyContent='end' gap={2}>
    {item.map( item => (
      <Grid container direction='column' width='max-content' alignItems='center' key={item.nombre}>
        <Link href={item.link} passHref>
          <StyledLink color={pathname !== '/' ? '#000' : '#FFFF'}>{item.nombre}</StyledLink>
        </Link>
        <Stack width='40px' height='2px' 
        bgcolor={(pathname === item?.link )? palette?.primary?.main : 'none' } 
        className="animate__animated animate__slideInLeft animate__fadeIn animate__selected" 
        />
      </Grid>
    ))}
  </Grid>
  )
}

export default MenuDesktop;




const StyledLink = styled(LinkMUI)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: theme.typography.h3.fontFamily,
  fontWeight: 400,
  fontSize: '16px',
}));
