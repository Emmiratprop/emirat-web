const queryInmueble = `
{
    queryInmueblesContentsWithTotal(top:999){
        total
        items{
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
      
}
`

export default queryInmueble