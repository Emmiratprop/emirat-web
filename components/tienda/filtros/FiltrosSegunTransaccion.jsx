import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material'


const FiltrosSegunTransaccion = () => { 

    const router = useRouter()
    const [selectedValue, setSelectedValue] = useState(router?.query?.slug);

    useEffect(() => {
      
      setSelectedValue(router?.query?.slug)   

    }, [router?.query?.slug])
    

    const onCheckboxChange = (event) => {
        setSelectedValue(event.target.value);
        router.push(`/inmuebles/${event.target.value}`)
    }

  return (
    <Grid container width='100%'>
        <FormGroup>
            <Typography variant='h3' mb='1rem'>Tipo de transacción:</Typography>
            <FormControlLabel control={<Checkbox />} label="Alquiler" value='alquiler' onChange={onCheckboxChange} checked={selectedValue === 'alquiler'}/>
            <FormControlLabel control={<Checkbox />} label="Comprar" value='comprar' onChange={onCheckboxChange} checked={selectedValue === 'comprar'}/>
        </FormGroup>
    </Grid>
  )
}

export default FiltrosSegunTransaccion;