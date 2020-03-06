<template>
  <header>
    <div class="nav-left">
      <router-link to="/"><img alt="EDF Logo" class="nav-logo" src="../../assets/EDFLogo.png" /> EDF</router-link>
    </div>
    <div class="nav-right">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/edf4-1">EDF 4.1</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    align-items: center;
    background: #333;
    display: flex;
    flex-flow: row;
    height: 4rem;
    justify-content: center;
    left: 0;
    position: fixed;
    width: 100%;
  }

  .nav-left {
    flex: 1;
    margin: 0 2rem;
  }

  .nav-left img {
    border-radius: 5px;
    height: 30px;
    vertical-align: middle;
  }

  .nav-left a {
    color: #ccc;
    font-size: .7rem;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .nav-right {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 25px;
  }

  .nav-right ul {
    align-items: center;
    display: flex;
    flex-flow: row;
    padding: 0;
  }

  .nav-right li {
    list-style-type: none;
    margin-left: 1rem;
  }

  .nav-right a {
    color: #ccc;
    font-size: .7rem;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
