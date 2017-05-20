<template>
  <div class="forecast">
    <div class="toggleBtn">
      <button v-bind:class="{ active:showToday }" v-on:click="today" type="button">Today</button>
      <button v-bind:class="{ active:!showToday }" v-on:click="fiveDay" type="button">5 day</button>
    </div>
    <today v-if="showToday"></today>
    <fiveDay v-else="showToday"></fiveDay>
  </div>
</template>

<script>
import Today from './Today'
import FiveDay from './FiveDay'

export default {
  name: 'Forecast',
  data() {
    return {
      showToday: true
    }
  },
  components: {
    Today,
    FiveDay
  },
  methods: {
    today(){
      this.showToday = true;
    },
    fiveDay(){
      this.showToday = false;
    }
  }
}
</script>

<style scoped>
  .toggleBtn{
    display: flex;
  }
  button{
    font-size: 1rem;
    padding: 10px;
    width: 50%;
    border: none;
    color: #4C5163;
  }
  .active{
    background-color: #47B2FF;
    font-weight: bold;
    color: white;
  }
</style>
