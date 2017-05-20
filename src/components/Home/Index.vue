<template>
  <div class="home">
    <h1>Find your forcast</h1>
    <search></search>
  </div>
</template>

<script>
import Search from './Search'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
