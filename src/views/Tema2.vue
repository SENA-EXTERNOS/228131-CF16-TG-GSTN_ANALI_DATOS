<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos estadísticos

    p.mb-5 Cuando se habla de métodos o modelos estadísticos para el análisis de datos, se indica que estos consisten en una secuencia de procedimientos, que permiten el manejo de los datos de investigación, sean estos cualitativos o cuantitativos. 

    h2 Tipos de variables
    
    p.mb-5 Hemos avanzado en el manejo de herramientas para la creación de visualizaciones. Ahora, se continúa con el desarrollo de los temas relacionados con tipos de variables cualitativas o categóricas y cuantitativas o numéricas, entre ellas las discretas y las continuas.

    .row.justify-content-around.align-items-center.mt-5
      .col-10.px-5.py-4
        .row
          .col-12.d-lg-block
            .bloque-texto-x.fac.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-x__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-3 A continuación, se explican los diferentes tipos de variables, mediante teoría-práctica, manejando un ejemplo real utilizando gráficos, generados dentro de Google Colab, utilizando el lenguaje Python. 
                <br>
                <br>
                p.mb-5 Para la ejemplificación, se tomaron pantallazos de los datos de incidentes de tránsito obtenidos de la página de datos abiertos de la Alcaldía de Medellín en formato CSV (Alcaldía de Medellín, 2022).

    .tarjeta.color-slyder-A.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 <b>Categóricos:</b> <i>object y booleano (booleanos</i> o lógicos, verdadero o <i>falso, true, false</i>).
            p.mb-4 <b>Numéricos:</b> int64, significa valores enteros o discretos, representa un entero de 64 bits.
            p.mb-4 <b>Numéricos:</b> float64 (continuos), significa que toman valores reales de 64 bits.
            p.mb-4 En 64 bits, el rango es de -9.223.372.036.854.775.808 hasta 9.223.372.036.854.775.807
            p.mb-4 df.info() da información sobre el tipo de variables en las columnas del <i>data frame.</i> También df.dtypes, nos da información sobre las variables.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-2.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 La columna “Gravedad_victima” es una variable de tipo objeto no nula.
            p.mb-4 La columna “Edad” es una variable de tipo objeto no nula: 17, 20, 18,19, 39.
            p.mb-4 df.nunique() permite saber los valores únicos que toma la columna. 
            p.mb-4 La columna “Gravedad_victima” tiene 2 valores únicos los cuales son “Heridos y Muertos”. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 La columna sexo o género es una variable categórica nominal, toma los valores: masculino y femenino.
            p.mb-4 La columna clase de incidente es una variable categórica nominal, toma los valores: choque, otro, atropello, caída ocupante, volcamiento, incendio.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 29. </b> <i>Valores únicos de las columnas</i>
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 La columna “num_dia” es una variable numérica discreta, toma los valores: 1.0, 2.0, 3.0, 4.0
            p.mb-4 Las variables cuantitativas son continuas y discretas.
            p.mb-4 Ejemplo de variables cuantitativas continuas: el peso, la edad tomando los meses, días.
            p.mb-4 Las variables cualitativas son categóricas ordinales y categóricas nominales.
            p.mb-4 Las variables categóricas nominales son las que representan categorías sin clasificación intrínseca, ejemplo: las marcas de zapatos, género, raza, etnia.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 29. </b> <i>Valores únicos de las columnas</i>
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Las variables categóricas ordinales son valores que representan categorías con alguna clasificación intrínseca, tienen características de orden, ejemplo: malo, bueno, excelente.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 29. </b> <i>Valores únicos de las columnas</i>
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')
              
    
    h2 Muestreo estadístico

    .row.justify-content-around.align-items-center.mb-5
      .col-md-2
        figure
          img(src='@/assets/curso/temas/T2/img-4.svg', alt='Texto que describa la imagen')

      .col-md-9.mb-4.mb-md-0
        p.mb-4 En estadística una muestra es un subconjunto de casos o individuos en una población; en varias aplicaciones, es importante que esta sea representativa y, por esta razón, se debe elegir un método de muestreo apropiado para crear una muestra suficientemente aleatoria.
    
      

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-around.align-items-center(titulo="Muestreo aleatorio simple")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/T2/img-5.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-4 Técnica de muestreo donde todos los individuos que conforman la muestra tienen la misma probabilidad de ser elegidos. Si el individuo puede ser seleccionado más de una vez, se está en presencia de un muestreo aleatorio simple con reposición; en caso contrario, sería un muestreo aleatorio simple sin reposición.
          p.mb-4 <b>Ejemplo</b>
          p.mb-4 Se tiene una población de 500 personas y se quiere sacar una muestra de 50. Se asigna a las 500 personas un número y, de la misma forma que un sorteo de lotería, se seleccionan 50 números al azar. La totalidad de estos números es la muestra de 50 personas.
      
        
            

      .row.justify-content-around.align-items-center(titulo="Muestreo aleatorio estratificado")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/T2/img-6.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-4 Se utiliza cuando se quiere saber la relación entre los subgrupos o estratos por alguna característica o múltiples características en común; como el año cuando ocurrió el incidente de tránsito, la edad de la persona involucrada, etc.
          p.mb-4 <b>Ejemplo</b>
          p.mb-4 Dividir la muestra de las personas adultas menores o iguales a 52 años que tuvieron un incidente de tránsito en Medellín en 7 subgrupos por edad, cada letra corresponde a un grupo: a) 18-25 años, b) 26-33 años, c) 34-41 años, d) 42-49 años, e) 43-50 años, f) 44-51 años, g) 45-52 años.
      

      .row.justify-content-around.align-items-center(titulo="Ejemplo muestreo estratificado")
        .col-md-6.mb-4.mb-md-0
          p La población de 204185 personas se puede dividir por estratos según el año del incidente de tránsito. La característica o estrato sería el año del incidente. Tomando un subgrupo o subpoblación por año, se debe realizar el muestreo aleatorio en cada estrato. Por ejemplo, tomar los que tuvieron incidentes en el 2014 que son 31411 y de allí, tomar la muestra aleatoria con un tamaño representativo determinado. En ese año ocurrió el mayor número de incidentes, un total de 31411.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/T2/img-7.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center(titulo="Muestreo sistemático")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/T2/img-8.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-4 Se utiliza cuando el muestreo aleatorio simple no se puede llevar a cabo por algún motivo.
          p.mb-4 <b>Ejemplo: </b>de una población de 235845 se quiere una muestra de 500 elementos o individuos, para ello se divide el total de la población en 50 pedazos o fragmentos aleatorios de 10 individuos. Luego se selecciona un número al azar entre 1 y 10.
          p.mb-4 Elegir de forma aleatoria el primer individuo, luego definir el tamaño de un intervalo para seleccionar los otros individuos que hacen parte de la muestra. Este tamaño del intervalo lo define la persona a cargo de la investigación. 


      .row.justify-content-around.align-items-center(titulo="Ejemplo muestreo sistémico")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 Se va a extraer una muestra de 10 personas de una muestra de 50 personas. El primer individuo seleccionado para la muestra es el número 5 con un tamaño o intervalo de 4, decidido por el investigador.
          p.mb-4 Los elementos de la muestra serían: 5, 9, 13, 17, 21, 25, 29, 33, 37, 41. 
          p.mb-4 En Google Colab se puede hacer el muestreo aleatorio simple, importando la librería <i>random</i>, relacionada con valores aleatorios, se carga mediante <i>import random.</i>
          p.mb-4 muestreo15= df.sample(n=15), significa que de la <i>data frame</i> llamado df toma una muestra aleatoria de 15 elementos de la población 235845, se guarda en la variable muestreo15.
      
        .col-md-6
          figure
            .titulo-sexto.color-acento-contenido
              p.mb-0 
                p <i>Muestreo aleatorio simple</i>
            img(src='@/assets/curso/temas/T2/img-9.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-primario.p-4.mb-4.color-celeste
          p.mb-0 De la población 235845 se puede tomar un porcentaje aleatorio, por ejemplo, un 10 %.
          p.mb-5 pob_10 = df.sample(frac =.1), el valor .1 significa 10 % se guarda en la variable pob_10.


    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 
          p <i>Muestreo aleatorio</i>
      figure
        img(src='@/assets/curso/temas/T2/img-10.png', alt='¿cómo trabaja la IA?')
        

    h2.mb-5 Análisis bivariado

    p.mb-2 En el análisis bivariado, se busca observar la relación entre dos variables cuantitativas continuas.


    .row.justify-content-around.align-items-center.mt-5
      .col-10.px-5.py-4
        .row
          .col-12.d-lg-block
            .bloque-texto-x.fac.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-x__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-11.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-3 Con la librería seaborn de Python, con el alias o abreviación sns, se puede hacer análisis bivariado, es decir, de 2 variables, con la finalidad de observar la relación entre las dos o el comportamiento de una variable en relación con la otra. Teniendo como referencia los incidentes ocurridos en Medellín, se puede analizar, por ejemplo, la clase de incidente, en comparación con el año, y relacionarlo con el número de días.
                p Se debe observar cómo los datos están distribuidos, si tienen forma de distribución normal o <i>Campana de Gauss</i>.        



    p.mb-5 En el análisis bivariado se puede utilizar el diagrama de dispersión, coeficiente de correlación y la regresión lineal simple.

    .tarjeta.color-pasos.p-4
      PasosB.color-acento-botones

        .row.justify-content-center.align-items-center(titulo="")

          .col-md-3
            figure
              img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p Diagrama de dispersión el objetivo es averiguar la relación entre las dos variables numéricas.
        
          

        .row.justify-content-center.align-items-center(titulo="")

          .col-md-3
            figure
              img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p El coeficiente de correlación de <i>Pearson</i> mide la relación entre dos variables continuas, tiene un rango de valores entre -1 y 1.

        .row.justify-content-center.align-items-center(titulo="")

          .col-md-3
            figure
              img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p Correlación positiva si una variable aumenta la otra también. Si una variable disminuye la otra también.


        .row.justify-content-center.align-items-center(titulo="")

          .col-md-3
            figure
              img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p Correlación negativa si una variable aumenta la otra disminuye. Si una variable disminuye la otra aumenta.


        .row.justify-content-center.align-items-center(titulo="")
          .col-md-12.mb-4.mb-md-0
            p 
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson es 1 se habla de correlación perfecta. 
            p
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson es 0 se habla de correlación nula. 
            p
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson está entre 0.8 y 1, sin incluir los extremos, se habla de correlación muy alta. 

            p 
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson está entre 0.6 y 0.8, sin incluir los extremos, se habla de correlación alta. 
            p
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson esta entre 0.4 y 0.6, sin incluir los extremos, se habla de correlación moderada. 
            p
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson esta entre 0.4 y 0.2, sin incluir los extremos, se habla de correlación baja.

            p
              span.fad ● 
              |  Si el coeficiente de correlación de Pearson esta entre 0 y 0.2, sin incluir los extremos se habla de correlación muy baja.

            

        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Utilizando<i> joint plot</i> se pueden hacer simultáneamente la gráfica de las dos variables. En la parte superior se observa el gráfico sobre cómo está distribuida una variable y en la parte derecha, el gráfico de la distribución de la otra variable.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-13.png', alt='Texto que describa la imagen')
        
    h2 Regresiones

    p.mb-5 La presente sección se trabaja con la conocida <i>data</i> de precios de casas en Boston, Estados Unidos; para ello ver el documento Jupyter notebook en el material para descargar de nombre regresion.ipynb, donde se maneja tanto la regresión lineal simple, como la regresión lineal múltiple.



    .row.justify-content-around.align-items-center.mt-5
      .col-10.px-5.py-4
        .row
          .col-12.d-lg-block
            .bloque-texto-x.fac.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-x__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-14.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-3 En la regresión lineal simple se tiene dos variables: “y” la que se va a predecir, llamada variable dependiente y tenemos también la “x”, llamada variable independiente.

                <br>
                <br>
                p.mb-3 Se podría escribir como una ecuación lineal de la forma y = m*x +b
                <br>
                <br>
                p.mb-3 Donde m es la pendiente o inclinación de la recta, b es el punto de corte con el eje y.
                <br>
                <br>
                p.mb-3 En la regresión lineal múltiple se tiene una sola variable a predecir “y”, también varias variables independientes: X<span class="exponentes">1</span>, X<span class="exponentes">2</span>, X<span class="exponentes">3</span>, X<span class="exponentes">4</span>, + .....+ X<span class="exponentes">n</span>
                <br>
                <br>
                p.mb-3 Las constantes:
                <br>
                p.mb-0 a,b<span class="exponentes">1</span>, b<span class="exponentes">2</span>, b<span class="exponentes">3</span>, b<span class="exponentes">4</span>, ..... b<span class="exponentes">n</span>
                <br>
                <br>
                p.mb-3 La ecuación se puede escribir de la forma:
                <br>
                p.mb-0 Y= a+b<span class="exponentes">1</span>* X<span class="exponentes">1</span> + b<span class="exponentes">2</span> * X<span class="exponentes">2</span> + b<span class="exponentes">3</span> * X<span class="exponentes">3</span> + b<span class="exponentes">4</span> * X<span class="exponentes">4</span> +...+ b<span class="exponentes">n</span> * X<span class="exponentes">n</span>




    h2 Corroboración de hipótesis 

    p.mb-4 Consiste en contrastar dos hipótesis opuestas, sobre algún caso de estudio, llamadas hipótesis nula (Ho) e hipótesis alternativa (H1).
    p.mb-5 Por ejemplo, se quiere corroborar si hay alguna diferencia significativa entre el promedio de incidentes de tránsito en las mujeres respecto a la de los hombres. En este caso sería una diferencia de medias.


    .row.justify-content-center.align-items-center(titulo="")

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T2/img-16.png', alt='Texto que describa la imagen')

      .col-md-8.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-around.align-items-center(titulo="Promedio de mujeres que tienen incidentes de tránsito")
            .col-md-1 El promedio de las mujeres que tienen incidentes de tránsito sería: (μ<span class="exponentes">1</span>) y el promedio de los hombres que tienen incidentes de tránsito sería: μ<span class="exponentes">2</span>
              p.mb-4 Para ello se propone una prueba de hipótesis:
              p.mb-4 Las dos medias son iguales μ<span class="exponentes">1</span> = μ<span class="exponentes">2</span> pasando μ<span class="exponentes">2</span> a la izquierda resulta  μ<span class="exponentes">1</span> - μ<span class="exponentes">2</span> = 0
              p.mb-4 Las dos medias son diferentes μ<span class="exponentes">1</span> ≠ μ<span class="exponentes">2</span>, pasando μ<span class="exponentes">2</span> a la izquierda μ<span class="exponentes">1</span> - μ<span class="exponentes">2</span> ≠ 0
              p.mb-1 <b>Resumen:</b>
              p.mb-0 Ho = hipótesis nula =   μ<span class="exponentes">1</span> - μ<span class="exponentes">2</span> = 0
              p.mb-5 H1 = hipótesis alternativa = μ<span class="exponentes">1</span> - μ<span class="exponentes">2</span> ≠ 0
          
          .row.justify-content-around.align-items-center(titulo="Error tipo 1")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 En estadística cuando se plantea una prueba de hipótesis debemos hablar de un error que se puede cometer, se llama <b>error tipo 1 (α) ocurre cuando se rechaza la hipótesis nula siendo esta verdadera</b>. El error tipo 1(α) se conoce como falso positivo.
          

          .row.justify-content-around.align-items-center(titulo="Intervalo de confianza")
            .col-md-12.mb-4.mb-md-0
              p Con un intervalo de confianza del 95 %, el resto sería el error, es decir, el error tipo 1 es <i>α = 5 %= 0.05</i>, como se está diciendo que son diferentes, no mayor ni menor, se debe trabajar con 2 colas el error se divide entre las dos colas <i>α/2=2.5 %=0.025</i>. El valor <b>z</b> en la <b>distribución normal estandarizada</b> correspondiente a ese Intervalo de Confianza del <b>95 % es Z=1.96 </b>  

          .row.justify-content-around.align-items-center(titulo="Calcular el estadístico")
            .col-md-12.mb-4.mb-md-0
              p.mb-4  Calculará el <b>estadístico</b>, si ese estadístico cae en el intervalo de <b>z (-1.96, 1.96) significa que cae en la región de aceptación de Ho</b>, por lo tanto, podemos decir que con un 95 % de confianza no hay diferencia significativa entre los hombres y las mujeres que tienen incidentes de tránsito.  


          .row.justify-content-around.align-items-center(titulo="Aceptación o rechazo de hipótesis")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Pero si el <b>estadístico</b> cae fuera del intervalo de z (-1.96, 1.96), es decir, valores mayores a z = 1.96 o valores menores a z = -1.96 <b>significa que cae en la región de rechazo de Ho</b>, por lo tanto, aceptación de la hipótesis alternativa H1, podemos afirmar que con un 95 % de confianza, que si hay diferencia significativa entre los hombres y las mujeres que tienen incidentes de tránsito.
    
      

</template>

<script>
export default {
  name: 'Tema2',
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
