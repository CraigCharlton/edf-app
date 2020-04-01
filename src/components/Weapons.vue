<template>
  <div class="weapons">
    <div class="input-container name">
      <label>Weapon name:</label>
      <input />
    </div>
    <div class="input-container level">
      <label>Level:</label>
      <input />
    </div>
    <div class="input-container min">
      <label>Min weapon lvl:</label>
      <input />
    </div>
    <div class="input-container max">
      <label>Max weapon lvl:</label>
      <input />
    </div>
    <div class="submit">
      <button v-on:click="getWeaponData">Submit</button>
    </div>
    <div class="results">
      <input type="text" value="Results" />
      <div>{{weaponsDataList}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weapons',
  props: {
    msg: String
  },
  data() {
    return {
      weaponsDataList: []
    };
  },
  methods: {
    getWeaponData() {
      fetch("EDF4-1-Weapons.json")
        .then(response => response.json())
        .then(data => (this.weaponsDataList = data))
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
  .weapons {
    margin-top: 10px;
    margin: 30px auto 0;
    max-width: 350px;
    text-align: right;
  }

  .input-container {
    margin-bottom: 10px;
  }

  .results input {
    height: 80px;
  }
</style>
