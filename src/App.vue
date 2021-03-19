<template>
  <div id="app">
    <Intro/>
    <TotalAmount/>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import TotalAmount from "@/components/NeededForm.vue";

export default {
  name: 'App',
  components: {
    Intro,
    TotalAmount
  }
}
</script>

<style>
body {
  background: darkgrey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
