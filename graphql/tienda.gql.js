const queryInmueble = `
{
    queryInmueblesContentsWithTotal(top:999){
        total
        items{
          flatData{
            idInmueble
            nombreInmueble
            imagenesInmueble{
              url
            }
            precioInmueble
            direccionInmueble
            banosInmuebles
            piletaInmuebles
            cocheraInmuebles
            metrosInmuebles
            antiguedadInmueble
            dormitoriosInmueble
            
          }
        }
      }
      
}
`

export default queryInmueble