<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de datos 

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Técnicas de análisis exploratorio de datos (EDA) 
    
    p.mb-5 Es necesario tener claridad en los conceptos teóricos para llevarlos a la práctica.  La finalidad de este componente es tener buenas bases estadísticas para el análisis de datos mediante una técnica conocida como <i>Exploratory Data Analysis</i> (EDA) o Análisis Exploratorio de Datos (Martínez, 2019); (Lind et al., 2019); (Vladimirovna & Gutiérrez, 2016).
      
    .tarjeta.faa.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 EDA
            p.mb-4 <b>Análisis exploratorio de dato </b>
            p.mb-5 Consiste en tomar los datos en algunos de los formatos generalmente CSV, separados por coma (,) o punto y coma (;) o cualquier otro símbolo de separación, también los datos podrían estar en formato de libro de <i>excel .xlsx</i>.
            p.mb-5 Se utiliza <i>Python</i> para la lectura de los datos, pasarlos a <i>data frame</i> y convertirlos a un formato tipo tabla con filas y columnas.
            p.mb-5 Se trabaja con información real, datos de incidentes viales obtenidos de la página de datos abiertos de la Alcaldía de Medellín (Alcaldía de Medellín, 2022)
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-1.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 <i>Data frame</i>
            p.mb-4 <b>Revisar la calidad de los datos del <i>data frame</i></b>
            p.mb-4 Información que se analiza dentro de <i>Google Colab</i>. Después de pasar los datos a un <i>data frame</i> se debe revisar la calidad de los mismos, como datos repetidos, valores únicos, datos nulos, datos <i>nan</i>, datos atípicos, nombres de las columnas. Se observan los tipos de datos en cada columna, sin son <i>string</i>, objetos, numéricos, tipos de numéricos: enteros, flotantes, lógicos como boleanos cuyos valores son verdadero o falso -en ingles <i>true</i> o <i>false–</i> y tipo fecha <i>date</i>. Se revisa si es necesario convertirlos, por ejemplo:
            p.mb-5 De <i>string</i> a fecha o <i>string</i> a numérico. 
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-2.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Convertir a formato fecha
            p.mb-5 <i>df['Fecha_incidente']=pd.to_datetime(df['Fecha_incidente']),</i> significa que mediante pandas con el alias o abreviación pd se utiliza el método <i>to_datetime</i> para convertir la columna a formato fecha. 
            p.mb-5 Otra forma de hacerlo es:
            p.mb-5 <i>df["Fecha_incidente"] = df["Fecha_incidente"].astype("datetime64").</i>
            p.mb-5  Al comando <i>astype</i> internamente se le pasa el tipo de dato, en este caso <i>datetime64</i>,podría ser flotante o entero si se necesita convertir un dato a flotante o entero.
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-3.svg', alt='Texto que describa la imagen')
              
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Valores únicos
            p.mb-5 Para saber los valores únicos de una columna se utiliza: <i>df['Sexo'].unique()</i>, resultando en este caso ['M', 'F', 'Sin Inf'], M de masculino, F de femenino, Sin Inf de sin información.
            p.mb-5 Se puede tomar un subconjunto o filtrado de un <i>data frame</i> mediante:
            p.mb-5 <i>df_hombres = df[ df['Sexo'] == 'M' ],</i> significa que se toma solo el género masculino y se coloca en una variable de <i>nombre df_hombres.</i>
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-4.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Valor <i>NULL</i>
            p.mb-5 Indica algo que no existe y está vacío. Borrar valores <i>NaN (Not a Number)</i> significa No es un número. Ejemplo: df=df.dropna(), significa que borrará los datos <i>NaN</i> del <i>data frame</i> de nombre df. El valor NULL indica algo que no existe y está vacío diferente del <i>NAN</i>.
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-5.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Dimensión del <i>data frame</i>
            p.mb-5 Para saber la dimensión del data frame ejemplo: <i>df.shape</i>, dará el número de filas y columnas del <i>data frame</i>. En los datos de incidentes de tránsito se obtiene (235845, 19), el primer elemento es el total de filas, el segundo elemento el total de columnas.
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-6.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-12.mb-4.mb-md-0
            h4.mb-3 Analizar los datos
            p.mb-3 <b>Analizar los datos categóricos ordinales y nominales</b>
            p.mb-1 <b>Categóricos:</b> <i>object</i>
            p.mb-1 <b>Numéricos:</b> <i>int64</i>, significa valores enteros o discretos, representa un entero de 64 bits.
            p.mb-5 <b>Numéricos:</b> <i>float64</i>(continuos), significa que toman valores reales de 64 bits.
            p.mb-5 En 64 bits, el rango es de -9.223.372.036.854.775.808 hasta 9.223.372.036.854.775.807
            p.mb-5 <b>Categórico ordinal:</b> valores que representan categorías con alguna clasificación intrínseca, tiene características de orden, ejemplo: malo, bueno, excelente.
            p.mb-5 <b>Categórico nominal:</b> representan categorías sin clasificación intrínseca, ejemplo: las marcas de zapatos, género, raza, etnia.
            p.mb-5 Observar las primeras filas del <i>data frame</i> y las últimas filas del <i>data frame</i>, observar una columna en particular, también una fila en particular, tomar un numero de filas del <i>data frame</i>.

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Datos faltantes
            p Hay técnicas para imputación de datos faltantes, por ejemplo, sustituir el dato por el promedio de la columna donde está ausente, por la mediana, todo va a depender del análisis detallado de los datos, cuántos datos faltantes hay en total; la última opción es eliminar la fila correspondiente a ese dato faltante.
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-7.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-12.mb-4.mb-md-0
            h4.mb-3 Estadísticos descriptivos básicos
            p.mb-5 Para una columna numérica, mediante <i>df.describe()</i> se obtiene:
            p.mb-5 El valor máximo, valor mínimo, promedio, desviación estándar, cuartil1 (Q1), cuartil2 (Q2), cuartil3 (Q3).
            p.mb-5 Contar los valores de una columna utilizando el método: <i>value_counts(), ejemplo: df['Comuna'].value_counts(),</i> significa que la columna Comuna se obtendrá el número de datos por cada columna.
            p.mb-5 La Candelaria 36985, Castilla 22883, Laureles Estadio 19922, etc.
            p.mb-0 También se puede observar el porcentaje de esos valores referente al total, ejemplo:
            p.mb-5 <i>(df['Clase_incidente'].value_counts() / len(df)).sort_values(ascending=False)</i>
            p.mb-5 Significa que el total de valores de la columna incidente se divide por la longitud del <i>data frame</i> y ordenado de mayor a menor. Para obtener el número de filas o longitud del <i>data frame</i> se utiliza el comando <i>len()</i>.

        .row.justify-content-center.align-items-center
          .col-md-12.mb-4.mb-md-0
            h4.mb-3 Reemplazar símbolos
            p.mb-5 Se puede remplazar un símbolo en una columna mediante:
            p.mb-5 <i>df_limit['Latitud']=df_limit['Latitud'].replace(',','.',regex=True),</i> significa que en la columna latitud  se remplaza la coma por punto, para que no presente errores a nivel de cálculos.
            p.mb-0 Para cambiar la columna latitud a valor numérico mediante:
            p.mb-5 <i>df_limit['Latitud'] = pd.to_numeric(df_limit['Latitud'],errors = 'coerce')</i>
            p.mb-0 Para obtener los tipos de datos del data frame se utiliza el método <i>dtypes</i> ejemplo:
            p.mb-5 <i>df_limit.dtypes,</i> resultando  <i>Gravedad_victima   object, Año  float64, Num_dia  float64, etc.</i>
            p.mb-0 Para contar el total de valores nulos en el <i>data frame</i>, se le colocó el nombre <i>df_limit</i> y se utiliza:
            p.mb-0 <i>df_limit.isnull().sum()</i>
            p.mb-5 <i>df.isnull()</i> pregunta si hay valores nulos en el <i>data frame.</i>

        .row.justify-content-center.align-items-center
          .col-md-12.mb-4.mb-md-0
            h4.mb-3 Datos aleatorios
            p.mb-5 Se pueden tomar datos aleatorios de un <i>data frame</i> en <i>Python</i> importando la librería <i>random</i> mediante <i>import random, muestreo10 = df.sample(n=10)</i>, significa que toma una muestra aleatoria de 10 elementos del <i>data frame</i> llamado <i>df</i> y lo coloca en la variable de nombre <i>muestreo10</i> que sería un <i>data frame</i> de 10 elementos.
            p.mb-0 Una selección aleatoria del 10 % de la tabla utilizando el comando simple, ejemplo:
            p.mb-5 <i>pob_10 = df.sample(frac =.1)</i>
            p.mb-5 Se guarda el <i>data frame</i> con el 10 % del total en la variable <i>pob_10</i>
            p.mb-5 Si se requiere un 20 % se escribiría <i>pob_20 = df.sample(frac =.2)</i>
            p.mb-5 Se guarda el <i>data frame</i> con el 20 % del total en la variable <i>pob_20</i>

    p.mb-5 Muestra los valores de la columna condición de forma porcentual


    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          .titulo-sexto.color-acento-contenido
            p.mb-0 
              p <b> Figura 1. </b> <i>Columna condición de forma porcentual</i>
          img(src='@/assets/curso/temas/T1/img-8.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="63%" y="47%" numero="1")
        p Muestra los comandos para escribir los valores de la columna condición en forma porcentual de mayor a menor.

      .tarjeta.color-acento-botones.p-3(x="40%" y="58%" numero="2")
        p Muestra los valores de la columna condición de forma porcentual de mayor a menor.
        
  
    .col-md-10.mx-auto
      .tarjeta.fab.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/T1/img-9.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small.mb-2 Para familiarizarse con los mapas por medio de latitud y longitud, Observa los siguientes mapas de Colombia y Medellín, con los 100 puntos de los incidentes de tránsito ocurridos en esta ciudad.
                p.text-small También observa los gráficos dinámicos generados con la <i>libreria plotly.</i>
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/MEDELLIN2.html')" target="_blank")
                  span(style='color:#12263f !important') Descargar
                  i.fas.fa-file-download(style='color:#12263f !important')
    Separador
    
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Herramientas para análisis y procesamiento de datos


    .row.justify-content-around.align-items-center.mb-5
      .col-4.col-lg-3
        img(src="@/assets/curso/temas/T1/img-10.svg")
      .col-8
        p La finalidad de este componente es profundizar en el manejo de herramientas para el análisis y procesamiento de los datos a fin de mejorar la técnica conocida como <i>Exploratory Data Analysis</i> (EDA) o Análisis Exploratorio de Datos. Utilizando diferentes herramientas de procesamiento, análisis de datos y visualización.
        p Entre las herramientas están <i>Google Colab, Power BI, Tableau, CartoDb.</i>

    
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Google Colab" :icono="require('@/assets/curso/temas/T1/img-11.svg')")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-12.png', alt='Texto que describa la imagen')
          .col-md-6
            p Se puede trabajar código de <i>Python</i> por celdas, importar librerías para visualización de datos como <i>matplolit, plotly, seaborn,</i> etc.

      .py-4.py-md-5(titulo="Power BI – Tableau Public" :icono="require('@/assets/curso/temas/T1/img-11.svg')")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-13.png', alt='Texto que describa la imagen')
          .col-md-6
            p.mb-3 Herramientas para visualización de datos <i>Power BI</i> y <i>Tableau Public</i> en las cuales se pueden hacer tableros de mando o <i>dashboard</i> y contar o narrar una historia sobre los datos o <i>storytelling</i>.
            p.mb-5 Este tipo de herramientas permite conectarse con diferentes tipos de datos y con datos en diferentes bases de datos tanto <i>on premise</i> o en la nube, también se puede publicar los <i>dasboard</i> y <i>storytelling</i> en la nube. 
        
      .py-4.py-md-5(titulo="CartoDB" :icono="require('@/assets/curso/temas/T1/img-11.svg')")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T1/img-14.png', alt='Texto que describa la imagen')
          .col-md-6
            p Plataforma para almacenar y visualizar datos espaciales o geográficos; se debe tener latitud y longitud de los puntos para proceder a ubicarlos en el mapa.

    
    .row.justify-content-around.align-items-center.mb-5
      .col-md-8
        p.mb-4 A continuación, se explica un ejemplo paso a paso en la herramienta <i>Power BI</i>. Se trabajará con los datos de incidentes viales tomados de la página de datos abiertos de la Alcaldía de Medellín (MetaData,2022).
        p.mb-5 <i>Power BI</i> permite obtener datos de diferentes fuentes de datos, analizarlos y presentar un análisis de estos a través de informes. A continuación, se explica secuencialmente su funcionamiento mediante ejemplos.
      .col-md-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/T1/img-15.png', alt='Texto que describa la imagen')


    .tarjeta.color-pasos.p-4.mb-5
      PasosB.color-acento-botones

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En <i>Power BI</i> en el menú de inicio dar click en el botón obtener datos, luego conjunto de datos de <i>Power BI</i>, después elige texto o <i>CSV</i>.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 2. </b> <i>Cargar datos en formato CSV</i>
              img(src='@/assets/curso/temas/T1/img-16.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra como cargar los datos en formato CSV dentro de Power BI. 

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Se pueden transformar los tipos de datos por columna, convertir a texto, a número, fecha, etc.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 3. </b> <i>Transformar tipos de datos</i>
              img(src='@/assets/curso/temas/T1/img-17.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra la forma de transformar los tipos de datos por columna.  

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Las columnas latitud y longitud que están en formato texto o <i>string</i> se pueden cambiar a número.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 4. </b> <i>Columna latitud y longitud en formato texto</i>
              img(src='@/assets/curso/temas/T1/img-18.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra las columnas latitud y longitud en formato texto o <i>string</i> que se pueden cambiar a número. 


        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Muestra las columnas latitud y longitud en formato texto o <i>string</i>, se pueden cambiar a número donde está el símbolo número decimal.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 5. </b> <i>Columnas latitud y longitud</i>
              img(src='@/assets/curso/temas/T1/img-19.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Muestra Las columnas latitud y longitud cambiadas a formato número.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 6. </b> <i>Columnas latitud y longitud en formato número</i>
              img(src='@/assets/curso/temas/T1/img-20.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Los errores en las columnas se pueden eliminar dando click derecho en “Quitar errores”.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 7. </b> <i>Quitar errores en las columnas</i>
              img(src='@/assets/curso/temas/T1/img-21.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra cómo quitar los errores en las columnas de <i>Power BI</i>. 


        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Se puede observar la columna latitud sin errores.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 8. </b> <i>Columna latitud sin errores</i>
              img(src='@/assets/curso/temas/T1/img-22.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Se pueden reemplazar valores en una columna.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 9. </b> <i>Reemplazar valores en una columna</i>
              img(src='@/assets/curso/temas/T1/img-23.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra cómo reemplazar valores en una columna.  

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Las columnas se pueden filtrar de forma ascendente, descendente, por valores, etc.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 10. </b> <i>Filtrar las columnas</i>
              img(src='@/assets/curso/temas/T1/img-24.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra cómo filtrar las columnas. 

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En <i>Power BI</i> se puede observar el modelo.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 11. </b> <i>Modelo en Power BI</i>
              img(src='@/assets/curso/temas/T1/img-25.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En <i>Power BI</i> se pueden crear un <i>dashboard</i> o tablero de mando luego de hacer la limpieza de los datos que consiste en borrar los datos duplicados, los valores <i>nan</i>, los valores nulos, el tipo de variable correcto para cada columna, etc.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 12. </b> <i>Inicio del dashboard</i>
              img(src='@/assets/curso/temas/T1/img-26.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra el inicio del <i>dashboard</i> o tablero de mando

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En la configuración interna del computador se puede cambiar a región español (Latinoamérica) para que <i>Power BI</i> reconozca el decimal como un punto y la coma para separación de mil.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 13. </b> <i>Cambiar idioma de la región</i>
              img(src='@/assets/curso/temas/T1/img-27.png', alt='Texto que describa la imagen')
              figcaption Nota. Cambiar región a español (Latinoamérica). 

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Muestra la siguiente pestaña para cambiar a región español (Latinoamérica).
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 14. </b> <i>Pestaña cambiar región</i>
              img(src='@/assets/curso/temas/T1/img-28.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Muestra la última pestaña para cambiar a región español (Latinoamérica)
        
          .col-md-3
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 15. </b> <i>Personalizar el formato</i>
              img(src='@/assets/curso/temas/T1/img-29.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Si el mapa está deshabilitado debe ir a archivo-> opciones y configuración-> opciones ->global ->seguridad, por último, marcar uso de elementos visuales de mapa y mapa coroplético.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 16. </b> <i>Habilitar opciones de configuración del mapa</i>
              img(src='@/assets/curso/temas/T1/img-30.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra como habilitar el mapa. 

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Muestra como habilitar el mapa.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 17. </b> <i>Habilitar el mapa</i>
              img(src='@/assets/curso/temas/T1/img-31.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Para el <i>dashboard</i> se escoge de la visualización la figura tabla y, luego, las columnas, en este caso año, mes, día, clase_incidente, barrio, comuna, grupo_edad, condición. 
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 18. </b> <i>Escoger visualización</i>
              img(src='@/assets/curso/temas/T1/img-32.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra cómo escoger de  la visualización la figura tabla con sus columnas. 

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En el <i>dashboard</i> se escoge el gráfico de anillos donde está el recuento por comuna referente a la clase de incidente (choque, otro, atropello, caída del ocupante, volcamiento).
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 19. </b> <i>Mostrar un gráfico de anillos</i>
              img(src='@/assets/curso/temas/T1/img-33.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Filtrado por las columnas, en este caso: año, mes, día, clase_ incidente, barrio, comuna, grupo_ edad, condición.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 20. </b> <i>Filtrado por columnas</i>
              img(src='@/assets/curso/temas/T1/img-34.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En el <i>dasboard</i> final se muestran dos tarjetas donde está la hora del incidente y la condición. 
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 21. </b> <i>Dashboard final</i>
              img(src='@/assets/curso/temas/T1/img-35.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra el <i>dasboard</i> final donde se aprecian dos tarjetas: la hora del incidente y la condición. 


    .row.justify-content-around.align-items-center.mb-5
      .col-md-2.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/T1/img-36.svg', alt='Texto que describa la imagen')
      .col-md-9
        p En el ejemplo anterior se presentó el funcionamiento de <i>Power BI</i> y la creación de tableros dinámicos en un proceso de análisis de datos reales sobre incidentes de tránsito en la ciudad de Medellín. A continuación, se ilustra un breve ejemplo del uso de la herramienta <i>Tableau Public</i>.
        
    .tarjeta.tarjeta-slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Tableau Public</i>
            p Otra herramienta para la visualización y el análisis de datos. En conectar se escoge el tipo de fuente de los datos, en este caso: archivo de texto.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 22. </b> <i>Escoger la fuente de datos</i>
              img(src='@/assets/curso/temas/T1/img-37.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra como escoger la fuente de datos para el análisis. 

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En el archivo de texto se seleccionan los datos de incidentes de tránsito en Medellín.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 23. </b> <i>Elegir archivo de datos</i>
              img(src='@/assets/curso/temas/T1/img-38.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra la forma de elegir el archivo de los datos de incidentes de tránsito en Medellín. 

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Se puede observar una vista previa de los datos en <i>Tableau</i>.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 24. </b> <i>Vista previa</i>
              img(src='@/assets/curso/temas/T1/img-39.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra la vista previa de los datos en <i>Tableau</i>. 

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Al hacer click en la hoja 1, en esa región, se pueden hacer las diferentes visualizaciones o gráficos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-40.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra la hoja 1 donde se puede hacer las diferentes visualizaciones o gráficos. 



        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En las columnas están escritos diferentes símbolos. ABC significa que la columna es de tipo texto o <i>string</i>, símbolo de calendario referente a una fecha, símbolo de numeral referente a un valor numérico.
            p.mb-5 Para latitud y longitud se cambia de número a función geográfica latitud y longitud, función geográfica longitud. Queda con un símbolo de globo terráqueo o mundo.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 25. </b> <i>Símbolos de las columnas</i>
              img(src='@/assets/curso/temas/T1/img-41.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra los diferentes símbolos de las columnas, también de la latitud y longitud del número a función geográfica. 

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Ahora, hacer click en actualizar para ver los datos en las diferentes columnas.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 26. </b> <i>Datos de las columnas</i>
              img(src='@/assets/curso/temas/T1/img-42.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En la columna se arrastra la variable año, en la fila se arrastra la variable grupo_edad y en texto se arrastra la variable edad, quedando etiquetada por edad.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p <b> Figura 27. </b> <i>Columna año</i>
              img(src='@/assets/curso/temas/T1/img-43.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra en la columna año, en la fila grupo_edad y en texto la etiquetada por edad. 

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Criterios de respaldo y recuperación de información

    p.mb-3 La información que genera una empresa u organización debe almenarse en una base de datos <i>on premise</i> o en la nube y tener como respaldo una copia de seguridad llamada <i>backups</i>. Las copias de seguridad deben realizarse periódicamente, dependiendo de la rapidez en la generación de datos y de la actividad de la empresa.
    p.mb-5 Los <i>backups</i> se pueden programar mediante un <i>trigger</i> o disparador, a un cierto horario, generalmente se realiza en la madrugada. 


    .row.justify-content-center(data-aos="fade-down").mt-5
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T1/img-44.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Servicio en la nube
                p.mt-3.small-text <i>Amazon Web Services (Aws), Google Cloud Platform (GCP), Microsoft Azure, IBM Cloud,</i> etc.
                p.mt-3.small-text Dependiendo de la frecuencia de acceso a la información de respaldo o <i>backups</i>, se pueden utilizar varios planes para disminuir costos.

      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T1/img-45.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Tipos de copias de seguridad 
                p.mt-3.small-text Hay diferentes tipos de copias de seguridad: Completa, incremental, diferencial, espejo, sintética completa, etc. Por ejemplo, la completa incluye todos los archivos y carpetas seleccionados.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T1/img-46.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Propósito del <i>backup</i>
                p.mt-3.small-text Respaldar la información generada para prevenir la pérdida total o parcial de la misma, como consecuencia de algún evento.
                
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Gestión de seguridad de la información

    p.mb-5 Hay diferentes proveedores de servicios que prestan ese servicio en la nube como: <i>Amazon Web Services (Aws), Google Cloud Platform (GCP), Microsoft Azure, IBM Cloud,</i> etc.


    .tarjeta.color-pasos-B.p-4
      PasosB.color-acento-botones

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-47.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Se pueden hacer réplicas de la información para que no esté centralizada en una sola región del servidor. Esto genera un mayor costo, pero tranquilad en caso de alguna contingencia de orden mayor.

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-48.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Es recomendable que la región escogida este cerca de la información para mejorar la latencia o tiempo de respuesta a una petición realizada por un usuario.

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-49.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Para acceder a las instancias en la nube se debe tener una clave cifrada, generada por el proveedor de servicio.

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-50.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p La seguridad debe ser tanto interna como externa. En la parte interna se deben crear los grupos de seguridad muy bien definidos, separarlos dependiendo del área en el que trabajan en la empresa y asignarles los permisos necesarios para acceder a la información, según las funciones que desempeñan.. Ejemplo: dependiendo del tipo de empresa se crean diferentes grupos como: administrativos, contabilidad, financiera, ventas, mercadeo, desarrollo, producción, etc.

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-51.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p.mb-3 Se deben dar los menores permisos a los usuarios, es decir, solo los necesarios dependiendo de su grupo de trabajo.
            p.mb-5 Si el empleado trabaja desde casa, se debe asesorar para que lleve un estricto protocolo de acceso a la información de la empresa desde su portátil. 

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-52.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Las contraseñas se deben guardar de forma segura para evitar el acceso a la información de personas fuera de la empresa. Es importante tener diferentes claves cifradas aleatorias para cada servicio. Se debe tener un gestor de contraseñas con autenticación en dos factores y con un límite de tiempo de vencimiento de la clave, por ejemplo, de 30 segundos.
        
          


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
