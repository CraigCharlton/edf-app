<template>
  <div id="app">
    <img alt="EDF Logo" class="main-logo" src="./assets/EDFLogo.png">
    <Home title="Home"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-logo {
  max-width: 250px;
}
</style>
