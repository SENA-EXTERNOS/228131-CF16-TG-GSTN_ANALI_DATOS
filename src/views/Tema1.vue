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
