<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Transformación de datos
    p.mb-5 La transformación de datos es el proceso de convertir datos sin procesar de un formato a otro, para que el sistema o la aplicación de destino los pueda utilizar. Incluye múltiples actividades, como 'transformar' sus datos filtrándolos según ciertas reglas y uniendo diferentes campos para obtener una vista consolidada.

    h2 Proceso de transformación de datos

    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/T3/img-1.png', alt='Texto que describa la imagen')

      .col-md-7.mb-4.mb-md-0
        p.mb-4 Esta técnica consiste en tomar los datos en algunos de los formatos generalmente CSV, separados por comas (,) o punto y comas (;) o cualquier otro símbolo de separación; también podrían estar en formato de libro de excel .xlsx. modificarlos para un correcto análisis de los datos. 
        p.mb-3 Se utilizará Python para la lectura de los datos, pasarlos a <i>data frame</i> y convertirlo a un formato tipo tabla con filas y columnas.
        .cajon.color-acento-botones.p-4.mb-4.color-amarillo
          p.mb-0 Se trabaja con información real, datos sobre incidentes de tránsito en Medellín obtenidos de la página de datos abiertos de la Alcaldía.

    p.mb-5 La finalidad de este componente es tener buenas bases estadísticas para el análisis de datos, utilizando la técnica Análisis exploratorio de datos, EDA (Exploratory Data Analysis).



    .tarjeta.faa.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 En el proceso de transformación de datos se quiere borrar los datos NaN de una columna, por ejemplo, de la columna Edad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-2.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Se quiere saber si hay algún valor nulo en la columna o variable Edad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-3.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 La fecha está en formato objeto o <i>string</i> y se puede cambiar a formato fecha, como se observa en la figura: Muestra los tipos de columnas.
            p.mb-0 Utilizando:
            p.mb-4 df['Fecha_incidente']=pd.to_datetime(df['Fecha_incidente'])
            p.mb-1 Se puede hacer de otra forma utilizando:
            p.mb-0 df["Fecha_incidente"] = 
            p.mb-5 df["Fecha_incidente"].astype("datetime64")
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-4-.png', alt='Texto que describa la imagen')
          
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Se pueden saber los tipos de variables de las columnas utilizando el método df.dtypes
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-5.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Cambiar la latitud y longitud de objeto a numérico.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Cambiar la coma por el punto en las variables latitud y longitud.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-7.png', alt='Texto que describa la imagen')

    h2.mb-5 Método de discretización

    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-7.mb-4.mb-md-0
        p.mb-4 La finalidad del método de discretización es la de convertir una variable numérica en variable categórica.
        p.mb-3 Se requiere una variable numérica continua, para convertirla en categórica; este proceso se llama <b>discretización de variables</b>. Por ejemplo, la edad que es una continua numérica, se puede dividir por categorías o intervalos, de acuerdo con la edad. Las categorías podrían ser niños, jóvenes, adultos, ancianos. Una de las aplicaciones de este método es la de convertir un proceso de regresión, a clasificación. Se trata de predecir el valor exacto de la edad y determinar si esta variable corresponde a un niño, joven, adulto, o anciano. Por el cambio del problema de regresión a clasificación, se cambiaría a las técnicas de <i>Machine Learning</i> que se pueden trabajar, debido a que se modificó el enfoque del problema. También se podría utilizar para la clasificación de valores atípicos, valores que son muy altos o bajos quedarían dentro de su categoría. 

      .col-md-5
        figure
          img(src='@/assets/curso/temas/T3/img-8.png', alt='Texto que describa la imagen')

    p.mb-5 Se utiliza la librería de Pandas de Python para discretizar variables.


    .tarjeta.faa.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Para la variable Edad este tipo objeto o <i>string</i> se debe convertir primero a numérica antes de discretizar, utilizando la librería de pandas con el alias o abreviación pd.
            p.mb-5 df['Edad'] = pd.to_numeric(df['Edad'],errors = 'coerce')
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-9.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Categorizar la variable edad:
            p.mb-0 Niño = [0,10]
            p.mb-0 Joven = (10,18]
            p.mb-0 Adulto = (18,60]
            p.mb-0 Anciano = (60, inf]
            p.mb-4 Inf=infinito
            p.mb-4 Tenemos 4 categorías o intervalos de diferentes tamaños y se utilizarán en los datos de incidentes viales en la ciudad de Medellín. 
            p.mb-5 Pandas con su alias pd, pd.cut( ) para dividir o cortar en los intervalos, trabajando con las etiquetas labels=["niño","joven","adulto","anciano"] que corresponden a cada intervalo. np.inf es el número infinito.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-10.png', alt='Texto que describa la imagen')
      
    p.mb-5 A continuación, se presenta la discretización de una variable por categorías.


    .col-md-10.mx-auto.mb-5
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/T3/img-11.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="4%" y="33%" numero="1")
          p Muestra la discretización de una variable por categorías.

        .tarjeta.color-acento-contenido.p-3(x="3%" y="86%" numero="2")
          p Muestra la salida de la discretización.   

    
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
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Material_descarga.rar')" target="_blank")
                    span Descarga
                    i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-acento-botones.p-4.mb-4.color-amarillo
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


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
