const query = `
{
    queryInmueblesContents{
    id
    flatData{
      nombreInmueble
      estadoInmueble
    }
   }

   }
`

export default query;