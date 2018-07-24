<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyComp />
    <marquee>Test move</marquee>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComp from './components/MyComp.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MyComp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
