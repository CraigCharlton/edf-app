<template>
  <div class="edf4-1">
    <img alt="EDF Logo" class="main-logo" src="../assets/EDF41Logo.png" />
    <h1>EDF 4.1</h1>
    <p>EDF 4.1 lists</p>
    <Weapons />
  </div>
</template>

<script>
import Weapons from '../components/Weapons.vue'

export default {
  name: "EDF4-1",
  components: {
    Weapons
  }
};
</script>

<style scoped>
  .main-logo {
    margin-top: 80px;
    max-width: 250px;
  }

  .edf4-1 {
    text-align: center;
  }
</style>
