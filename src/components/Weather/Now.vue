<template>
  <div class="now">
    <div class="container">
      <img class="contained" src="./../../assets/sunrise.svg" alt="">
      <div class="info contained">
        <h3 id="state">RI</h3>
        <h3 id="city">Coventry</h3>
        <h3 id="date">Tues | March 14</h3>
        <h2 id="now">now: SUNNY</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'now',
}
</script>

<style scoped>
  .now{
    position: relative;
  }
  .container{
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  .contained{
    width: 50%;
  }
  .info{
    display: flex;
    flex-direction: column;
  }
  .info *{
    /*align-self: center;*/
    text-align: right;
    margin-bottom: 0.2em;
  }
  h3 {
    font-weight: normal;
  }
</style>
