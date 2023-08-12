import { MainLayout } from '../../layout';
import queryInmueble from '../../graphql/tienda.gql';
import fetchAPI from '../../squidexConectData';
import { BannerTienda, Inmueble, Ordenamientos, Paginado } from '../../components/tienda';
import { Grid } from '@mui/material';




const Tienda = ({ inmuebles=[] }) => {
  
  return (
    <MainLayout title='TIENDA'>
    <BannerTienda />
    <Grid container justifyContent="space-between" pt={10}>
        
      <Grid item xs={12} sm={2.5} minHeight={{ xs: "3rem", sm: "8rem" }} backgroundColor='white' height='max-content' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}}>
          {/* <Filtros /> */}
      </Grid>

      <Grid item xs={12} sm={8.5}>
        {/* <Grid container width='100%' alignItems='center' justifyContent={{ xs: "center", sm: "space-between" }} gap={{ xs: 3, sm: 0 }}>
            <Ordenamientos />
            <Paginado />
        </Grid> */}

        <Grid item mt="2rem">
            <Inmueble total={inmuebles?.total} items={inmuebles?.items} />
        </Grid>
      </Grid>

    </Grid>
    </MainLayout>
  )
}

export default Tienda;



export async function getStaticPaths() {

  const tipoTransaccion = ['todos','alquiler','comprar']

  return {
    paths: tipoTransaccion?.map( tipo => ({
      params: { slug: tipo }
    })),
    fallback: false
  };
}



export async function getStaticProps({params}) {

  const data = await fetchAPI(queryInmueble)

  return {
    props: {
      inmuebles: data.queryInmueblesContentsWithTotal,
    },
  };
}