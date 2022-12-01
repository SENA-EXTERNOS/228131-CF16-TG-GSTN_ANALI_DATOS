<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Transformación de datos

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Proceso de transformación de datos

    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/T3/img-1.png', alt='Texto que describa la imagen')

      .col-md-7.mb-4.mb-md-0
        p.mb-4 Esta técnica consiste en tomar los datos en algunos de los formatos generalmente CSV, separados por comas (,) o punto y comas (;) o cualquier otro símbolo de separación; también podrían estar en formato de libro de <i>excel</i> .xlsx. modificarlos para un correcto análisis de los datos. 
        p.mb-3 Se utilizará <i>Python</i> para la lectura de los datos, pasarlos a <i><b>data frame</b></i> convertirlo a un formato tipo tabla con filas y columnas (Martínez, 2019); (Lind et al., 2019); (Vladimirovna & Gutiérrez, 2016).
        .cajon.color-acento-botones.p-4.mb-4.color-amarillo
          p.mb-0 Se trabaja con información real, datos sobre incidentes de tránsito en Medellín obtenidos de la página de datos abiertos de la Alcaldía.

    p.mb-5 La finalidad de este componente es tener buenas bases estadísticas para el análisis de datos, utilizando la técnica  <i>Exploratory Data Analysis</i> (EDA) o Análisis Exploratorio de Datos.



    .tarjeta.faa.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 En el proceso de transformación de datos se quiere borrar los datos NaN de una columna, por ejemplo, de la columna Edad.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 32. </b> <i>Muestra los valores como barra</i>
              img(src='@/assets/curso/temas/T3/img-2.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra como borra los valores NaN de la columna Edad

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Se quiere saber si hay algún valor nulo en la columna o variable Edad.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 33. </b> <i>Muestra si existen valores nulos</i>
              img(src='@/assets/curso/temas/T3/img-3.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra si hay valores nulos en la columna Edad. 

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 La fecha está en formato objeto o <i>string</i> se puede cambiar a formato fecha <b>(Ver Figura 35)</b>
            p.mb-0 Utilizando:
            p.mb-4 <i>df['Fecha_incidente']=pd.to_datetime(df['Fecha_incidente'])</i>
            p.mb-1 Se puede hacer de otra forma utilizando:
            p.mb-0 <i>df["Fecha_incidente"] = </i>
            p.mb-5 <i>df["Fecha_incidente"].astype("datetime64")</i>
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 34. </b> <i>Cambio formato de fecha</i>
              img(src='@/assets/curso/temas/T3/img-4.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra el cambio de fecha de formato objeto o <i>string</i> a formato fecha. 

          
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Se pueden saber los tipos de variables de las columnas utilizando el método <i>df.dtypes</i>
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 35. </b> <i>Muestra los tipos de columnas</i>
              img(src='@/assets/curso/temas/T3/img-5.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Cambiar la latitud y longitud de objeto a numérico.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 36. </b> <i>Muestra cambios de latitud</i>
              img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra el cambio de la latitud y longitud de objeto a numérico. 


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Cambiar la coma por el punto en las variables latitud y longitud.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 37. </b> <i>Cambiar la coma por el punto</i>
              img(src='@/assets/curso/temas/T3/img-7.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra el cambio de la coma por el punto en las columnas latitud y longitud 


    p.mb-5 Para una mejor comprensión del análisis de datos se invita a ver el siguiente video: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    Separador
    
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2	Método de discretización

    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-7.mb-4.mb-md-0
        p.mb-4 La finalidad del método de discretización es convertir una variable numérica en categórica.
        p.mb-3 Se requiere una variable numérica continua para convertirla en categórica, este proceso se llama discretización de variables. Por ejemplo, la edad que es continua numérica se puede dividir por categorías o intervalos de acuerdo con la edad. Las categorías podrían ser niños, jóvenes, adultos, ancianos. Una de las aplicaciones de este método es convertir un proceso de regresión a clasificación. Se trata de predecir el valor exacto de la edad y determinar si la edad corresponde a un niño, joven, adulto, anciano. Por el cambio del problema de regresión a clasificación, se cambiaría a las técnicas de <i>Machine Learning</i> que se pueden trabajar, debido a que se modificó el enfoque del problema. También se podría utilizar para la clasificación de valores atípicos, valores que son muy altos o bajos quedarían dentro de su categoría.

      .col-md-5
        figure
          img(src='@/assets/curso/temas/T3/img-8.png', alt='Texto que describa la imagen')

    p.mb-5 Se utiliza la librería de pandas de <i>Python</i> para discretizar variables.




    .tarjeta.faa.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 La variable Edad este tipo objeto o <i>string</i> se debe convertir primero a numérica antes de discretizar, utilizando la librería de pandas con el alias o abreviación pd
            p.mb-5 <i>df['Edad'] = pd.to_numeric(df['Edad'],errors = 'coerce')</i>
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 38. </b> <i>Muestra la variable edad</i>
              img(src='@/assets/curso/temas/T3/img-9.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Categorizar la variable edad:
            p.mb-0 Niño = [0,10]
            p.mb-0 Joven = (10,18]
            p.mb-0 Adulto = (18,60]
            p.mb-0 Anciano = (60, inf]
            p.mb-4 Inf=infinito
            p.mb-4 Tenemos 4 categorías o intervalos de diferentes tamaños se utilizará en los datos de incidentes viales en Medellín. 
            p.mb-5 Pandas con su alias pd, pd.cut( ) para dividir o cortar en los intervalos, trabajando con las etiquetas labels=["niño","joven","adulto","anciano"] que corresponde a cada intervalo. np.inf es el número infinito
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 39. </b> <i>Discretizar las variables</i>
              img(src='@/assets/curso/temas/T3/img-10.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra como discretizar la variable edad por categorías.

      
    p.mb-5 Muestra la discretización de una variable por categorías.


    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 
          p <b> Figura 40. </b> <i>Discretización de la variable edad</i>
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/T3/img-11.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="4%" y="33%" numero="1")
          p Muestra la discretización de una variable por categorías

        .tarjeta.color-acento-contenido.p-3(x="3%" y="86%" numero="2")
          p Muestra la salida de la discretización  

    
    .row.mt-5
      .col-10.offset-1
        .tarjeta.cuadro-descarga.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/T3/img-12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para poner en práctica los conocimientos abordados en este proceso de aprendizaje, se sugiere descargar los archivos que se usaron para realizar la práctica. 

                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=15156&pg=202 " target="_blank")
                    span Descarga
                    i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-acento-botones.p-4.mb-4.color-amarillo
          p.mb-0 Concluida la fase de exposición de contenidos, se  invita a explorar los demás recursos que se encuentran disponibles en este componente formativo, como: la síntesis, una actividad didáctica, material complementario, entre otros, para afianzar los conocimientos y determinar el nivel de aprendizaje en las temáticas estudiadas. 







</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
