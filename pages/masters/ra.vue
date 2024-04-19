<template>
  <div>
    <input type="radio" id="option1" value="option1" v-model="selectedOption">
    <label for="option1">Option 1</label><br>

    <input type="radio" id="option2" value="option2" v-model="selectedOption">
    <label for="option2">Option 2</label><br>

  </div>
</template>

<script setup>
const selectedOption = ref('option1');
</script>
