(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"0874":function(a,e,t){a.exports=t.p+"img/img-9.50d3b6d0.png"},2288:function(a,e,t){a.exports=t.p+"img/img-6.2b06e3d0.png"},2303:function(a,e,t){a.exports=t.p+"img/img-7.bc1c8c34.png"},"2b9a":function(a,e,t){a.exports=t.p+"img/img-1.ffa2ac57.png"},"44cb":function(a,e,t){a.exports=t.p+"img/img-11.6bcbbed8.png"},4749:function(a,e,t){a.exports=t.p+"img/img-12.6f4ec53b.svg"},"68b3":function(a,e,t){a.exports=t.p+"img/img-10.a2f78aa9.png"},a182:function(a,e,t){a.exports=t.p+"img/img-3.420cad26.png"},b1e1:function(a,e,t){a.exports=t.p+"img/img-5.fb96e7ca.png"},d0e4:function(a,e,t){a.exports=t.p+"img/img-8.e588d269.png"},eb46:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),s("p",{staticClass:"mb-5"},[a._v("La transformación de datos es el proceso de convertir datos sin procesar de un formato a otro, para que el sistema o la aplicación de destino los pueda utilizar. Incluye múltiples actividades, como 'transformar' sus datos filtrándolos según ciertas reglas y uniendo diferentes campos para obtener una vista consolidada.")]),s("h2",[a._v("Proceso de transformación de datos")]),a._m(1),s("p",{staticClass:"mb-5"},[a._v("La finalidad de este componente es tener buenas bases estadísticas para el análisis de datos, utilizando la técnica Análisis exploratorio de datos, EDA (Exploratory Data Analysis).")]),s("div",{staticClass:"tarjeta faa p-4 mb-5"},[s("SlyderA",{attrs:{tipo:"b"}},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("En el proceso de transformación de datos se quiere borrar los datos NaN de una columna, por ejemplo, de la columna Edad.")])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("fb13"),alt:"Texto que describa la imagen"}})])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Se quiere saber si hay algún valor nulo en la columna o variable Edad.")])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("a182"),alt:"Texto que describa la imagen"}})])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("La fecha está en formato objeto o "),s("i",[a._v("string")]),a._v(" y se puede cambiar a formato fecha, como se observa en la figura: Muestra los tipos de columnas.")]),s("p",{staticClass:"mb-0"},[a._v("Utilizando:")]),s("p",{staticClass:"mb-4"},[a._v("df['Fecha_incidente']=pd.to_datetime(df['Fecha_incidente'])")]),s("p",{staticClass:"mb-1"},[a._v("Se puede hacer de otra forma utilizando:")]),s("p",{staticClass:"mb-0"},[a._v('df["Fecha_incidente"] = ')]),s("p",{staticClass:"mb-5"},[a._v('df["Fecha_incidente"].astype("datetime64")')])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("f511"),alt:"Texto que describa la imagen"}})])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Se pueden saber los tipos de variables de las columnas utilizando el método df.dtypes")])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("b1e1"),alt:"Texto que describa la imagen"}})])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Cambiar la latitud y longitud de objeto a numérico.")])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("2288"),alt:"Texto que describa la imagen"}})])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Cambiar la coma por el punto en las variables latitud y longitud.")])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("2303"),alt:"Texto que describa la imagen"}})])])])])],1),s("h2",{staticClass:"mb-5"},[a._v("Método de discretización")]),a._m(2),s("p",{staticClass:"mb-5"},[a._v("Se utiliza la librería de Pandas de Python para discretizar variables.")]),s("div",{staticClass:"tarjeta faa p-4 mb-5"},[s("SlyderA",{attrs:{tipo:"b"}},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Para la variable Edad este tipo objeto o "),s("i",[a._v("string")]),a._v(" se debe convertir primero a numérica antes de discretizar, utilizando la librería de pandas con el alias o abreviación pd.")]),s("p",{staticClass:"mb-5"},[a._v("df['Edad'] = pd.to_numeric(df['Edad'],errors = 'coerce')")])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("0874"),alt:"Texto que describa la imagen"}})])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Categorizar la variable edad:")]),s("p",{staticClass:"mb-0"},[a._v("Niño = [0,10]")]),s("p",{staticClass:"mb-0"},[a._v("Joven = (10,18]")]),s("p",{staticClass:"mb-0"},[a._v("Adulto = (18,60]")]),s("p",{staticClass:"mb-0"},[a._v("Anciano = (60, inf]")]),s("p",{staticClass:"mb-4"},[a._v("Inf=infinito")]),s("p",{staticClass:"mb-4"},[a._v("Tenemos 4 categorías o intervalos de diferentes tamaños y se utilizarán en los datos de incidentes viales en la ciudad de Medellín. ")]),s("p",{staticClass:"mb-5"},[a._v('Pandas con su alias pd, pd.cut( ) para dividir o cortar en los intervalos, trabajando con las etiquetas labels=["niño","joven","adulto","anciano"] que corresponden a cada intervalo. np.inf es el número infinito.')])]),s("div",{staticClass:"col-md-6"},[s("figure",[s("img",{attrs:{src:t("68b3"),alt:"Texto que describa la imagen"}})])])])])],1),s("p",{staticClass:"mb-5"},[a._v("A continuación, se presenta la discretización de una variable por categorías.")]),s("div",{staticClass:"col-md-10 mx-auto mb-5"},[s("ImagenInfografica",{staticClass:"color-acento-botones mb-5",scopedSlots:a._u([{key:"imagen",fn:function(){return[s("figure",[s("img",{attrs:{src:t("44cb"),alt:"Texto que describa la imagen"}})])]},proxy:!0}])},[s("div",{staticClass:"tarjeta color-acento-contenido p-3",attrs:{x:"4%",y:"33%",numero:"1"}},[s("p",[a._v("Muestra la discretización de una variable por categorías.")])]),s("div",{staticClass:"tarjeta color-acento-contenido p-3",attrs:{x:"3%",y:"86%",numero:"2"}},[s("p",[a._v("Muestra la salida de la discretización. ")])])])],1),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-10 offset-1"},[s("div",{staticClass:"tarjeta cuadro-descarga p-3 mb-5"},[s("div",{staticClass:"row justify-content-around align-items-center"},[a._m(3),s("div",{staticClass:"col"},[s("div",{staticClass:"row justify-content-between align-items-center"},[a._m(4),s("div",{staticClass:"col-sm-auto"},[s("a",{staticClass:"boton color-acento-botones",attrs:{href:a.obtenerLink("downloads/Material_descarga.rar"),target:"_blank"}},[s("span",[a._v("Descarga")]),s("i",{staticClass:"fas fa-file-download"})])])])])])])])]),a._m(5)])],1)},i=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[a._v("3")])]),t("h1",[a._v("Transformación de datos")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center align-items-center mb-5",attrs:{titulo:""}},[s("div",{staticClass:"col-md-5"},[s("figure",[s("img",{attrs:{src:t("2b9a"),alt:"Texto que describa la imagen"}})])]),s("div",{staticClass:"col-md-7 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("Esta técnica consiste en tomar los datos en algunos de los formatos generalmente CSV, separados por comas (,) o punto y comas (;) o cualquier otro símbolo de separación; también podrían estar en formato de libro de excel .xlsx. modificarlos para un correcto análisis de los datos. ")]),s("p",{staticClass:"mb-3"},[a._v("Se utilizará Python para la lectura de los datos, pasarlos a "),s("i",[a._v("data frame")]),a._v(" y convertirlo a un formato tipo tabla con filas y columnas.")]),s("div",{staticClass:"cajon color-acento-botones p-4 mb-4 color-amarillo"},[s("p",{staticClass:"mb-0"},[a._v("Se trabaja con información real, datos sobre incidentes de tránsito en Medellín obtenidos de la página de datos abiertos de la Alcaldía.")])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center align-items-center mb-5",attrs:{titulo:""}},[s("div",{staticClass:"col-md-7 mb-4 mb-md-0"},[s("p",{staticClass:"mb-4"},[a._v("La finalidad del método de discretización es la de convertir una variable numérica en variable categórica.")]),s("p",{staticClass:"mb-3"},[a._v("Se requiere una variable numérica continua, para convertirla en categórica; este proceso se llama "),s("b",[a._v("discretización de variables")]),a._v(". Por ejemplo, la edad que es una continua numérica, se puede dividir por categorías o intervalos, de acuerdo con la edad. Las categorías podrían ser niños, jóvenes, adultos, ancianos. Una de las aplicaciones de este método es la de convertir un proceso de regresión, a clasificación. Se trata de predecir el valor exacto de la edad y determinar si esta variable corresponde a un niño, joven, adulto, o anciano. Por el cambio del problema de regresión a clasificación, se cambiaría a las técnicas de "),s("i",[a._v("Machine Learning")]),a._v(" que se pueden trabajar, debido a que se modificó el enfoque del problema. También se podría utilizar para la clasificación de valores atípicos, valores que son muy altos o bajos quedarían dentro de su categoría. ")])]),s("div",{staticClass:"col-md-5"},[s("figure",[s("img",{attrs:{src:t("d0e4"),alt:"Texto que describa la imagen"}})])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"col-3 col-sm-2 col-lg-1"},[s("img",{attrs:{src:t("4749")}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"col mb-3 mb-sm-0"},[t("p",[a._v("Para poner en práctica los conocimientos abordados en este proceso de aprendizaje, se sugiere descargar los archivos que se usaron para realizar la práctica. ")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center align-items-center mb-5"},[t("div",{staticClass:"col-8"},[t("div",{staticClass:"cajon color-acento-botones p-4 mb-4 color-amarillo"},[t("p",{staticClass:"mb-0"},[a._v("Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.")])])])])}],o={name:"Tema3",data:function(){return{}},mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},n=o,r=t("2877"),c=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports},f511:function(a,e,t){a.exports=t.p+"img/img-4-.1f4b73ef.png"},fb13:function(a,e,t){a.exports=t.p+"img/img-2.570d1530.png"}}]);
//# sourceMappingURL=tema3.3d6bfc68.js.map