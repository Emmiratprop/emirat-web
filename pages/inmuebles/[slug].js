import { MainLayout } from '../../layout';
import queryInmueble from '../../graphql/tienda.gql';
import fetchAPI from '../../squidexConectData';
import { BannerTienda, Inmueble, FiltrosSegunTransaccion, Ordenamientos, Paginado } from '../../components/tienda';
import { Grid } from '@mui/material';


const Tienda = ({ inmuebles=[] }) => {

  return (
    <MainLayout title='EMIRAT PROPEIDADES - TIENDA'>
      <BannerTienda />
      <Grid container justifyContent="space-between" pt={{xs:4, sm:10}}>
          
        <Grid item xs={12} sm={2.5} minHeight={{ xs: "3rem", sm: "8rem" }} backgroundColor='white' height='max-content' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} p='1rem' mb={{xs:'2rem',sm:0}}>
          <FiltrosSegunTransaccion />
        </Grid>

        <Grid item xs={12} sm={8.5}>
          {/* <Grid container width='100%' alignItems='center' justifyContent={{ xs: "center", sm: "space-between" }} gap={{ xs: 3, sm: 0 }}>
                <Ordenamientos />
                <Paginado />
              </Grid> 
          */}

          <Grid item>
              <Inmueble total={inmuebles?.total} items={inmuebles?.items} />
          </Grid>
        </Grid>

      </Grid>
    </MainLayout>
  )
}

export default Tienda;




export async function getServerSideProps({ params }) {

  let filter = ""

  if(params?.slug === 'comprar'){

    filter = "data/tipoTransaccionVenta/iv eq true"

  }else if(params?.slug ==='alquiler'){

    filter = "data/tipoTransaccionAlquiler/iv eq true"

  }

  const data = await fetchAPI(queryInmueble(filter))

  return {
    props: {
      inmuebles: data.queryInmueblesContentsWithTotal,
    },
  };
}