import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { item } from "../itemsNavBar";
import { IconButton, Drawer, ListItem, ListItemText, Grid, Typography, Link as LinkMUI, Divider, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';




const MenuMobile = () => {

  const { pathname } = useRouter()

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => () => setOpenDrawer(!openDrawer);
   
  const colorBoton = pathname !== '/' ? '#000' : '#FFFF'

  return (
    <>
    <IconButton sx={{color: colorBoton}} onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon /><Typography variant="h4">Menu</Typography>
    </IconButton>

    <Drawer anchor='right' variant='temporary' open={openDrawer} onClose={toggleDrawer} >
    <Grid paddingTop='1rem'>
      <Grid borderBottom='solid 2px #DBDBDB' paddingBottom='1rem'>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} color="primary"><CloseIcon /></IconButton>
      </Grid>

      <Stack p={2} sx={{display:'flex', flexDirection:'column', justifyContent:'start'}}>
      {item.map((item) => (
        <Fragment key={item.nombre}>
        <Link href={item.link} passHref>
        <StyledLink p={2}>
          <Typography>{item.nombre}</Typography>
        </StyledLink>
        </Link>

         {item.subItems && 
          <>
          <Divider color='secondary'/>
          {item.subItems?.map( s => (
          <Link href={s.link} passHref  key={s.nombre}>
          <ListItem>
            <StyledLink><ListItemText>{s.nombre}</ListItemText></StyledLink>
          </ListItem>
          </Link>
          ))}
          <Divider color='secondary'/>
          </>
         }
        </Fragment>
      ))}
      </Stack>

      </Grid>
    </Drawer>
  </>

  )
}

export default MenuMobile;




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
