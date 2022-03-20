<template>
  <NavBar />
  <router-view/>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>

<style>
  @import url('./Main.css');
</style>
