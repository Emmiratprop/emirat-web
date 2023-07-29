const queryInmueble = (id) => {return (`
{
    findInmueblesContent(id:"${id}"){
      id
      flatData{
        nombre
        descipcion
        imagenes{
          url
        }
        precio
        moneda
        fechaPublicacion
        direccion
        direccionGeolocalizacion
        banos
        pileta
        cochera
        metros
        antiguedad
        dormitorios
        tipoTransaccionVenta
        tipoTransaccionAlquiler
        estado
      }
    }
    
  }
`)}

export default queryInmueble