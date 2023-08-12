import Link from "next/link";
import { Grid, Link as LinkMUI } from "@mui/material"
import { styled } from '@mui/material/styles';



const Menu = () => {
  return (
    <Grid container position='absolute' top={{xs:'86%', sm:'80%'}} right={{xs:'5%', sm:'23%'}} direction='row' width={{xs:'90%',sm:'55%'}} justifyContent='space-around' height={{xs:'20%', sm:'30%'}}
     boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;' zIndex={200} backgroundColor='#FFFFFF' gap={1} 
    >
        <Link href='inmuebles/alquiler' passHref>
          <LinkStyle>ALQUILER</LinkStyle>
        </Link>

        <GridBorder />

        <Link href='inmuebles/comprar' passHref>
          <LinkStyle>COMPRAR</LinkStyle>
        </Link>

        <GridBorder />

        <Link href='contacto' passHref>
          <LinkStyle>VENDER</LinkStyle>
        </Link>

    </Grid>
  )
}

export default Menu;




const LinkStyle = styled(LinkMUI)(({ theme }) => ({
    borderRadius:'0px',
    display:'flex',
    flexGrow: 1,
    textDecoration:'none',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: '15px',
    '&:hover': {
        color:'#C39315', 
        backgroundColor: '#281D44'
      },
  }));


  const GridBorder = styled(Grid)(({ theme }) => ({
    border:'1px solid #C5C5C5',
    alignSelf: 'center',
    height: '40%'
  }));
