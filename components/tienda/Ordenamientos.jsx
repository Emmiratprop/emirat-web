import { Grid, Typography } from "@mui/material";


const styleSelect = {
  borderRadius:'10px',
  padding:'0.75rem',
  borderColor: '#281D44',
  backgroundColor: 'white'
}


const Ordenamientos = () => {

  const handleOrdenChange = (event) => { }

  return (
    <Grid item sm={7} alignItems='center'>
      <Typography variant='p' color='#868686+' pr={1}>Ordenar Por:</Typography>
      <select defaultValue={'default'} onChange={handleOrdenChange} style={styleSelect}>
        <option value={'default'}>PRECIO</option> {/* Original */}
        <option value={'desc'}>Mayor precio</option> {/* Descendiente */}
        <option value={'asc'}>Menor precio</option> {/* Ascendiente */}
      </select>
    </Grid>
  );
};

export default Ordenamientos;
