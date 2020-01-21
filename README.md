# Notas

## Ejecutar proyecto

`cd [nombre-proyecto]` y ejecutar el comando
`yarn serve` y la App estará disponible en el `http://localhost:8080/`

## Configuraciones

- version de Node 12

## Complejidad inherente vs instrumental

la complejidad inherente es la complejidad de lo que se desea hacer y
la complejidad instrumental es la complejidad de utilizar las herramientas para hacerlo (React, Vue, Angular etc..)

ambas complejidades deben ir a la par para poder llevar un proyecto adecuadamente
, mientras mas complejos mas herramientas y mas complejo

## Propiedades de vue.js

### Computed

las computed properties se recargan cada vez que cambia alguna variable

### Slots

los slots siven para crear espacios en los componentes hijos donde el componente padre puede insertar html
los slots pueden tener un contenido por defecto pero si el componente padre añade contenido este toma prioridad.

### Modifiers

permiten hacer prevent default a los eventos que nos proporciona vue para crear cosas como por ejemplo: `@keyup.enter="search"` donde el evento se dispara solo al darle enter

### Filtros

permiten modificar la forma en que se muestra una variable sin modificar su valor

### Mixins

permiten compartir methods, computed , etc , cualquier propiedad o metodo de un componente entre componentes

### Transitions

permiten controlar las animaciones de entrada y salida de componentes , opacity 0 ha 1 y viceversa

### Vuex

se recomienda para aplicaciones de mediana o gran escala.
genera un singleton de la informacion con un store de los estados de la aplicacion permitiendo que diversos componentes manejen la misma informacion

esta pensado en un manejo de estados a gran escala.

cuando se recomienda, cuando hay demasiadas interacciones entre eventos padres e hijos y hermanos.
**Vuex es una libreria Flux que al igual que los anteojos te daras cuenta cuando las necesitas**.

### 