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
        <PublicidadEmpresa direccion='izquierda' imagen={imagen} titulo="Visión" texto="Aspiramos a ser reconocidos por nuestra trayectoria en el mercado, siendo pioneros en la aplicación de tecnología de vanguardia para simplificar y enriquecer la experiencia inmobiliaria. Queremos ser el referente en seguridad y confiabilidad, donde nuestros clientes se sientan protegidos y respaldados en cada transacción. Nos esforzamos por mantener un equipo comprometido y apasionado, cuyos valores y ética profesional estén arraigados en el corazón de nuestra empresa." />
        <PublicidadEmpresa direccion='derecha' imagen={imagen2} titulo="Valores" texto="Confianza: Es la base de todas nuestras relaciones. Nos esforzamos por ganarnos la confianza de nuestros clientes a través de la transparencia, la honestidad y el respeto. Vanguardia: Abrazamos la innovación en todos los aspectos de nuestro negocio. Buscando siempre nuevas formas de mejorar y simplificar la experiencia inmobiliaria para nuestros clientes. Ética: Actuamos con integridad y ética en todas nuestras interacciones. Cumplimos con los más altos estándares de calidad y profesionalismo. Compromiso: Estamos comprometidos con la satisfacción de nuestros clientes. Trabajamos incansablemente para lograr sus objetivos y superar sus expectativas. Comunidad: Valoramos y contribuimos a la comunidad en la que operamos. Estamos comprometidos con el crecimiento y el bienestar de Córdoba y sus residentes. " />
      </Grid>
    </MainLayout>
  )
}

export default Empresa



