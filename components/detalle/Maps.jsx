import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Grid } from '@mui/material';

const apiKey = process.env.NEXT_PUBLIC_API_KEY


const Maps = ({ latitude, longitude }) => {

  return (
    <Grid>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        center={{ lat: latitude, lng: longitude }}
        zoom={15}
        mapContainerStyle={{ height: "400px", width: "100%" }}
      />
      <Marker 
      position={{ lat: latitude, lng: longitude }} 
      // icon={{ url: icono }}
      />
    </LoadScript>
    </Grid>
  )
}

export default Maps