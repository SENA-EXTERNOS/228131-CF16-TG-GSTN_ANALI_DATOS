<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/introduccion/img-1.png', alt='mujer con un laptop y un robot')
      .col-md-9
        .cajon-b.color-primario.abajo-derecha.p-1.mb-5
          p Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje, orientado al análisis y procesamiento de datos. Durante su desarrollo se abordan los ejes temáticos de: análisis de datos, modelos estadísticos y transformación de datos. Al finalizar el componente formativo, estará en capacidad de verificar la calidad de la información, comparar los datos, filtrarlos, ajustar contenidos de variables y elaborar un documento de depuración de información. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje. 
          p.mb-0 <b>¡Muchos éxitos, que tenga un aprendizaje significativo!</b>


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
