
const queryLanding = ( filter ) => {return (`
  {
    queryInmueblesContents( filter:"${filter}", top:999 ){
          id
          flatData{
            imagenes{
              url
            }
            precio
            moneda
            tipoTransaccionVenta
            tipoTransaccionAlquiler
          }
        }
  }
  `
)}

export default queryLanding;

