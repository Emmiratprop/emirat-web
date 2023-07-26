import { useRouter } from "next/router";
import Link from "next/link";
import { item } from "../itemsNavBar";
import { Grid, Link as LinkMUI } from "@mui/material";
import { styled } from '@mui/material/styles';


const MenuDesktop = () => {

 const { pathname } = useRouter()

 return (
  <Grid container direction='row' justifyContent='end' gap={2}>
    {item.map((item) => (
      <Link key={item.nombre} href={item.link} passHref>
        <StyledLink color={pathname !== '/' ? '#000' : '#FFFF' }>{item.nombre}</StyledLink>
      </Link>
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
  '&:hover': {
    borderBottom:'2px solid white'
  },
}));
