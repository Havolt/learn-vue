<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="listItem in myList" >{{ listItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      myList: ['cat', 'dog', 'plz']
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
