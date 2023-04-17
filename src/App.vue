<style>@import url(estilos.css);</style>
<template>
  <div>
    <div id="app">
      <h1>Tabla De Afluencias</h1>
      <TablaAfluencia></TablaAfluencia>
    </div>

  </div>
</template>

<script>
import TablaAfluencia from './components/Tabla.vue'

export default {
  name: 'app',
  components: {
    TablaAfluencia
  }
}
</script>





