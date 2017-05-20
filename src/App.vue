<template>
  <div id="app">
      <heading></heading>
      <router-view></router-view>
      <h6>All icons designed by <span><a href="http://www.flaticon.com/authors/freepik">Freepik</a></span> from Flaticon</h6>
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
    height: 100vh;
    width: 100vw;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
