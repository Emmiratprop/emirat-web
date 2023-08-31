import { MainLayout } from "../../layout"
import { heightViews } from "../../layout/MainLayout"
import { PublicidadEmpresa } from "../../components"
import imagen from "/public/empresa/fotoEmpresa.jpg"
import imagen2 from "/public/empresa/fotoempresa2.jpg"
import { Grid } from "@mui/material"


const Empresa = () => {
  return (
    <MainLayout title='EMIRAT PROPEIDADES - EMPRESA'>
      <Grid container direction='column' height='max-content' width='100%' justifyContent='space-around' alignItems='center' mt={`${heightViews}rem`} gap={3}>
        <PublicidadEmpresa direccion='izquierda' imagen={imagen} titulo="Misión" texto="Ser el socio de confianza de nuestros clientes en la búsqueda y adquisición de propiedades en la provincia de Córdoba, Argentina. Nos comprometemos a proporcionar un servicio inmobiliario de primera clase, respaldado por nuestra pasión por el sector y nuestro profundo conocimiento del mercado local. Nuestra prioridad es satisfacer las necesidades de nuestros clientes, guiándolos en cada paso del proceso de compra, venta y alquiler, para lograr sus objetivos de inversión y bienestar." />
        <PublicidadEmpresa direccion='derecha' imagen={imagen2} titulo="Visión" texto="Aspiramos a ser reconocidos por nuestra trayectoria en el mercado, siendo pioneros en la aplicación de tecnología de vanguardia para simplificar y enriquecer la experiencia inmobiliaria. Queremos ser el referente en seguridad y confiabilidad, donde nuestros clientes se sientan protegidos y respaldados en cada transacción. Nos esforzamos por mantener un equipo comprometido y apasionado, cuyos valores y ética profesional estén arraigados en el corazón de nuestra empresa."/>
      </Grid>
    </MainLayout>
  )
}

export default Empresa



