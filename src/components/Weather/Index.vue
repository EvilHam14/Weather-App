<template>
  <div class="weather">
    <search></search>
    <now></now>
    <forecast></forecast>
  </div>
</template>

<script>
import Search from './../Search/Index'
import Now from './Now'
import Forecast from './Forecast'

export default {
  name: 'weather',
  components: {
    Search,
    Now,
    Forecast
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
