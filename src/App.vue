<template>
  <div id="app">
    <heading></heading>
    <router-view></router-view>
  </div>
</template>

<script>
import Heading from '@/components/Heading/Index'
export default {
  name: 'app',
  components: {
    Heading
  }
}
</script>

<style>
body{
  margin: 0;
}
.contained{
  margin-left: 6rem;
  margin-right: 6rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
