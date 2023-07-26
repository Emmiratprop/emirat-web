import { useRouter } from "next/router";
import { Grid, Pagination, useTheme } from "@mui/material"


const Paginado = () => {

  // const navigate = useRouter()
  const theme = useTheme();

  const handleChange = (event, value) => {  }

  return (
    <Grid item xs={10} sm={5} >
      <Pagination variant="outlined" onChange={handleChange} defaultPage={1}
      // <Pagination count={cantidadPaginas} variant="outlined" onChange={handleChange} defaultPage={1} page={paginaActual}
      sx={{
        "& .MuiPaginationItem-root": {
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
        "& .Mui-selected": {
          borderColor: theme.palette.secondary.main,
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      />
    </Grid>
  ) 
}

export default Paginado