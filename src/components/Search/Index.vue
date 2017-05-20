<template>
  <div class="search">
    <div class="form">
            <a href="#"><img src="./../../assets/search.svg"></a><input type="text" placeholder="zip code">
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .form{
    width: 100%;
  }
  img{
    height: 2rem;
    position: absolute;
    color: green;
    margin-left: 10px;
  }
  input{
    height: 2rem;
    background-color: #333333;
    border-radius: 2px;
    border: none;
    text-align: center;
    width: 100%;
    color: #DF5A49;
    font-size: 1rem;
  }
</style>
