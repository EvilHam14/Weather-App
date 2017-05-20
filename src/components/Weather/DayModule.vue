<template>
  <div class="dayModule">
    <div class="container">
      <img src="./../../assets/clouds.svg">
      <div class="date">
        <h3><span id="day">Wed</span><br> Mar 15th</h3>
      </div>
      <div class="temp">
        <h1>67&deg</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dayModule',
}
</script>

<style scoped>
  .dayModule{
    position: relative;
  }
  .container{
    margin: 2rem;
    display: flex;
    flex-direction: row;
    height: 6rem;
    position: relative;
  }
  img{
    width: 20%;
  }
  .date{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .date h3{
    font-weight: normal;
  }
  #day{
    font-weight: bold;
  }
  .temp{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .temp h1{
    margin-right: 1rem;
  }
</style>
