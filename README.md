# API REST - MASAVAL - MERCADO PUBLICO DE CHILE 

_Simple API GET POST PUT DELETE + Scraping utilizando Python_ www.mercadopublico.cl 

## TAREA 

_En la pagina de mercado publico de Chile, bajo la barra de búsqueda aparece el botón de grandes compras, al ingresar a ese link podrás ver un nuevo formulario.
Al hacer click en el checkbox de Fecha de Invitación aparecerá un rango de fechas y luego, al presionar buscar se cargará la información de las Grandes Compas disponibles._

_La tarea es disponibilizar la información básica de las Grandes compras cuya fecha de invitación este dentro de los_ **últimos dos meses (60 dias)** 

Para esto se deben hacer **dos** cosas:

* _Hacer un scraper que obtenga la información de la página_

* _Disponibilizar en un endpoint web para poder consumir esta información. Para esto se recomendo hacer deploy de la API en algun servicio de la nube_ 


Esta **Tarea** se ha desarrollado con:

* _Para el scraping se utilizo Python + requests + beautifulsoup. (Solo la primera pagina se hablo con el PO)_

* _La API se construyo con NodeJs + express (morgan + nodemon para dev) y se desplego en Heroku._


## Ejecutando las pruebas 

_Se utilizo postman con simples llamados a la API en ejecucion local_

## Links Heroku Routes
```
GET     [/posts](https://restapi-mercadopublico.herokuapp.com/api/gcompras)
```
```
POST     /post
```
```
PUT      /post/9999
```
```
DELETE   /post/9999
```
