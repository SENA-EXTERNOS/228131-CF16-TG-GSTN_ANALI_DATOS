export default {
  global: {
    componenteFormativo: 'Análisis y procesamiento de datos',
    descripcionCurso:
      'En este componente se manejan las bases del análisis y procesamiento de datos. Se presentan conceptos como limpieza de los datos, métodos estadísticos, manejo de los datos con <i><b>Python</b></i> en <i><b>Google Colab</b></i> y colocarlos dentro de un mapa para el filtrado de la información, utilizando gráficas dinámicas mediante la librería <i><b>Plotly</b></i> para una mejor comprensión y visualización con <i><b>Power BI</b></i> y <i><b>Tableau</b></i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de análisis exploratorio de Datos (EDA)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas para análisis y procesamiento de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Criterios de respaldo y recuperación de información',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gestión de seguridad de la información',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de variables',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Muestreo estadístico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Análisis bivariado',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Regresiones',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Corroboración de hipótesis',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Proceso de transformación de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Método de discretización',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estadística descriptiva.',
      referencia:
        'Aguilar, J. (2021). Estadística descriptiva, regresión y probabilidad con aplicaciones. Ediciones de la U.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=15156&pg=202',
    },
    {
      tema: '<i>Python</i> practico',
      referencia:
        'Moreno, A., & Córcoles, S. (2019). Python práctico.  Editorial Rama.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10285&pg=1',
    },
    {
      tema: 'Estadística',
      referencia:
        'Triola, M. (2018). Estadística (12 edición). Pearson Educación.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7386&pg=149',
    },
    {
      tema: '<i>Learning Jupyter </i>5',
      referencia:
        'Toomey, D. (2018). Learning Jupyter 5: Explore interactive computing using Python, Java, JavaScript, R, Julia, and JupyterLab (2nd Edition). Packt Publishing.',
      tipo: 'Libro digital',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1881491&lang=es&site=ehost-live',
    },
    {
      tema: '<i>Jupyter for Data Science</i>',
      referencia:
        'Toomey, D. (2017) Jupyter for data science. Packt Publishing.',
      tipo: 'Libro digital',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1637911&lang=es&site=ehost-live.',
    },
  ],
  glosario: [
    {
      termino: 'Censo',
      significado:
        'Conjunto de actividades destinadas a recoger, recopilar, el padrón o lista de la población de una nación o pueblo en un momento determinado, la información demográfica social y económica, para luego evaluar, analizar y publicar o divulgar.',
    },
    {
      termino: 'Continua',
      significado:
        'Una variable continua es aquella que puede tomar un número infinito de valores entre dos valores cualesquiera de una característica. La altura de 5 personas: 1.85, 1.89, 1.93, 1.59, 1.65. En la práctica medimos la altura con dos decimales, pero también se podría dar con tres decimales o más.',
    },
    {
      termino: 'Cualitativa',
      significado:
        'Variable en la que los resultados posibles no son valores numéricos. Por ejemplo: color del pelo, tipo de ropa preferida, lugar de veraneo, etc.',
    },
    {
      termino: 'Cuantitativa',
      significado:
        'Se trata de características cuyas variaciones pueden ser expresadas de forma numérica. Por ejemplo: edad, peso, estatura, número de hijos, años de servicio, etc.',
    },
    {
      termino: 'Cuartiles',
      significado:
        'Son 4 divide un conjunto de datos ordenados en cuatro partes iguales. Cuartil 1 (Q1) 25 %, la mediana es el Cuartil 2 (Q2) 50 %, Cuartil 3 (Q3) 75 %, Cuartil 4 (Q4) 100 %. Se trabaja principalmente con los Q1, Q2, Q3.',
    },
    {
      termino: 'Dato atípico',
      significado: 'Es un valor mayor a 1.5 veces el rango intercuartil.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'Mide la dispersión de una distribución de datos. Entre más dispersa está una distribución de datos, más grande es su desviación estándar.',
    },
    {
      termino: 'Discreta',
      significado:
        'Una variable es discreta cuando no puede tomar ningún valor entre dos consecutivos, y que es continua cuando puede tomar cualquier valor dentro de un intervalo. Ejemplos de variable discreta: número de empleados de una fábrica; número de hijos; número de cuentas en un banco.',
    },
    {
      termino: 'Escala cronológica',
      significado:
        'El orden cronológico de los sucesos es la ubicación de éstos en una línea temporal.',
    },
    {
      termino: 'Escala nominal',
      significado:
        'Es una escala de medición en la cual los números sirven como “etiquetas” solamente para identificar o clasificar un objeto. Una escala de medición nominal normalmente trata sólo con variables no numéricas (no cuantitativas).',
    },
    {
      termino: 'Escala ordinal',
      significado:
        'Permite evaluar la actitud de un encuestado con respecto a un tema utilizando un conjunto de respuestas ordenadas. Por ejemplo, las respuestas pueden incluir: “muy satisfecho”, “satisfecho”, “insatisfecho” y “muy insatisfecho”.',
    },
    {
      termino: 'Estadísticos',
      significado:
        'Es cualquier función real medible de la muestra de una variable aleatoria.',
    },
    {
      termino: 'Media',
      significado:
        'Resultado que se obtiene al dividir la suma de varias cantidades por el número de sumandos.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Selección de un conjunto de personas o cosas que se consideran representativos del grupo al que pertenecen, con la finalidad de estudiar o determinar las características del grupo.',
    },
    {
      termino: 'Rango intercuartil',
      significado:
        'Es una medida de dispersión. Se obtiene restando el cuartil 3 (Q3) menos el cuartil 1(Q1); Q3-Q1 en ese rango está el 50 % de los datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Medellín (2022). MEData. Recuperado el 23 agosto de 2022 de',
      link: 'http://medata.gov.co/dataset/',
    },
    {
      referencia:
        'Altair (2022). Vega-Altair: visualización declarativa en Python.  Recuperado el 25 agosto de 2022 de: ',
      link: 'https://altair-viz.github.io/',
    },
    {
      referencia:
        'Carto (2022). Análisis espacial para la pila de datos moderna. Recuperado el 8 octubre de 2022 de',
      link: 'https://carto.com/',
    },
    {
      referencia:
        'Lind, D.,  Whaten, S. & Marchal, W. (2019). Estadística aplicada a los negocios y la economía (17 edición). Mc Graw hill. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9246&pg=315',
    },
    {
      referencia:
        'Martínez, C. (2019). Estadística y muestreo (14 edición). Ecoe ediciones. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9278&pg=387',
    },
    {
      referencia:
        'Martínez, C. (2019). Estadística básica aplicada (5ta edición). Ecoe ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8975&pg=82',
    },
    {
      referencia:
        'Matplotlib (2022). Visualización con Python. Recuperado el 25 agosto de 2022 de ',
      link: 'https://matplotlib.org/',
    },
    {
      referencia:
        'Microsoft (2022). Power BI. Recuperado el 8 octubre de 2022 de ',
      link: 'https://powerbi.microsoft.com/es-es/',
    },
    {
      referencia:
        'Plotly (2022). Biblioteca de gráficos de código abierto para Python. Recuperado el 25 agosto de 2022 de ',
      link: ' https://plotly.com/python/',
    },
    {
      referencia:
        'Seaborn (2022). Visualización de datos estadísticos. Recuperado el 25 agosto de 2022 de ',
      link: 'https://seaborn.pydata.org/',
    },
    {
      referencia:
        'Tableau Public (2022). Tableau Public. Recuperado el 8 octubre de 2022 de ',
      link: 'https://public.tableau.com/app/discover',
    },
    {
      referencia:
        'Vladimirovna, O. &  Gutiérrez, E. (2016). Estadística inferencial 1 para ingeniería y ciencias. Grupo Editorial Patria. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40474?page=69',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
