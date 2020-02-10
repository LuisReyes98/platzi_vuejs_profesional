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

### Directivas Custom

al instalar directivas como por ejemplo `Vue.use(blur)` con la syntaxis debida , las puedes usar en codigo como por ejemplo: `v-blur`, creando directivas custom y reutilizables

### Vuex

en aplicaciones pequeñas para comunicarse entre componentes puede ser util un event bus, pero se recomienda para aplicaciones de mediana o gran escala el uso de Vuex, ya que el event bus se volveria tedioso y poco escalable.
genera un singleton de la informacion con un store de los estados de la aplicacion permitiendo que diversos componentes manejen la misma informacion

esta pensado en un manejo de estados a gran escala.

cuando se recomienda, cuando hay demasiadas interacciones entre eventos padres e hijos y hermanos.
**Vuex es una libreria Flux que al igual que los anteojos te daras cuenta cuando las necesitas**.

vuex funciona como un arbol con toda la informacion que al haber un cambio en esta, vuex se encarga de propagarla a todos los componentes hijos

#### State

vuex utiliza un `store` que representa el estado global, siendo este el origen unico de la verdad.

cambios de estado se realizan con un commit

```javascript
this.$store.commit('increment', { number: 10})
```

#### Mutations

funcionan de manera similar a los eventos en los cual con un commit se realiza un cambio al estado de la aplicacion

#### getters

permite con vuex acceder a  las propiedades de forma personalizada, como si fuera un computed

#### Actions

las actions existen porque las mutations son sincronicas, por lo cual no puedes hacer un request HTTP con una mutation.

las actions permiten crear codigo asyncronico que ejecuta una mutation

se ejecutan con un dispatch

```javascript
this.$store.dispatch('incrementAsync', { number: 1})
```

si deseas ejecutar codigo despues que se realize el action, lo puedes hacer facilmente retornando una promesa

```javascript
return new Promise((resolve, reject) => {
  // Codigo asyncronico se ejecuta
  if(error){
    reject()
  }
  resolve()
})
```

#### Syntaxis de ECMAScript

Vuex utiliza una syntaxis de ECMAScript, que para el momento de escribir esto forma parte del stage 2 que es el:

- script operator

```javascript
let { x, y , ...z} = {x: 1, y: 2, a:3, b:4 }

x // 1
y // 2
z // { a:3, b:4}
```

#### Modulos de vuex

[Modulos de vuex para estados de aplicaciones grandes](https://vuex.vuejs.org/guide/modules.html)
