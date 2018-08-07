<template>
  <div id="app">
    <HeaderSection msg="Welcome to Your Vue.js App"/>
    <InputSection></InputSection>
    <ContactSection contactList = ContactSection.contactList></ContactSection>
  </div>
</template>

<script>
import Vue from 'vue';
import HeaderSection from './components/HeaderSection.vue';
import InputSection from './components/InputSection.vue';
import ContactSection from './components/ContactSection.vue';

export const dataBus = new Vue({
  data: function(){
    return {
      contactList: []
    }
  }
});

export default {
  name: 'app',
  components: {
    HeaderSection,
    InputSection,
    ContactSection
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
