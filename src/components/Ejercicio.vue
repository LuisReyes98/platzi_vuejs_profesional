<template lang="pug">
  .container.is-fluid
    .columns
      .column#div_formulario.is-half.is-offset-one-quarter.card
        #img-container.is-offset-one-quarter
          img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
        .row
          .control
            label.active.amber-text.text-darken-3(for="nombre") Nombre
            input#nombre.input(type="text" autocomplete="off")

          .control
            label.active.amber-text.text-darken-3(for="apellido") Apellido
            input#apellido.input(type="text" autocomplete="off")

          .control
            label.active.amber-text.text-darken-3(for="cargo") Cargo
            input#cargo.input(type="text" autocomplete="off")
          .control.has-text-right
            button.button(type="submit" name="action") Enviar
              i.material-icons.right
</template>

<script>
export default {
  name: 'Ejercicio',
  props: {
    msg: {
      type: String,
      default: 'Lorem'
    }
  }
}
</script>

<stylelang="scss">
@import'./scss/main.scss';
.notification{
  background: transparent
}
.input:focus{
  border-color: #ff9300
}
@media screen and (min-width: 991px) {
  #div_formulario{
    max-width: 320px;
    margin: 0 auto;
  }
  .card{
    padding: 20px;
    margin-top: 40px
  }
}
@media screen and (max-width: 990px){
  .container{
        max-width: 96%;
  }
}
.button{
      background-color: #00BFD6;
    border-color: #00BFD6;
    color: white;
    font-weight: bold;
}
#img-container{
  text-align: center;
}
.control{
  margin-top: 10px
}
</style>
