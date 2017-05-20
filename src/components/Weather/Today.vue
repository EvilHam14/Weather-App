<template>
  <div class="today">
    <div class="info">
      <h3>Cloudy with a change of showers</h3>
      <h4>H 72&deg | L 44&deg</h4>
    </div>
    <img src="./../../assets/clouds.svg" alt="">
    <div class="rain module">
      <h2>Precipitation</h2>
      <h1>10%</h1>
    </div>
    <div class="wind module">
      <h2>Wind</h2>
      <h1>5mph</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'today'
}
</script>

<style scoped>
  .today{
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .info{
    width: 60%;
    text-align: left;
  }
  img{
    display: inline-block;
    width: 40%;
  }
  .module{
    width: 50%;
  }
</style>
