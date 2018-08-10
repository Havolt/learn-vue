<template>
  <div>
    <div>Hello Vue</div><br>
    <div>
      <div>The counter has been clicked: {{ counter }} times</div>
      <button @click="counter += 1">Increment counter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {

  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
