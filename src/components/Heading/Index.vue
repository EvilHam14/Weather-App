<template>
  <div class="heading">
      <a class="logo" href="/">
        <h2 class="cast"><span class="four">4</span>cast</h2>
      </a>
  </div>
</template>

<script>
export default {
  name: 'heading'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.heading{
  width: 100vw;
  height: 60px;
  background-color: #DF5A49;
  display: flex;
}
.logo{
  text-decoration: none;
  color:#334D5C;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
}
.logo:hover{
  color: #416275;
  background-color: #E35C4A;
}
.logo *{
  margin-top: 11px;
}
.four{
  font-size: 140%;
}
</style>
