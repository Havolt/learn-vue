<template>
  <div id="app">
    <HeaderSection msg="Welcome to Your Vue.js App"/>
    <inputSection></inputSection>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import InputSection from './components/InputSection.vue';

export default {
  name: 'app',
  components: {
    HeaderSection,
    InputSection
  }
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
