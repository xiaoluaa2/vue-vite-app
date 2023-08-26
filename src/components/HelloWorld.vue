<template>
  <h1>{{ msg }}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('hello')
</script>
<style lang="less" scoped>
.read-the-docs {
  color: #888;

  .b {
    color: #888;
  }
}
</style>
