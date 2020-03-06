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
      <button>Submit</button>
    </div>
    <div class="results">
      <input type="text" value="Results" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weapons',
  props: {
    msg: String
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
