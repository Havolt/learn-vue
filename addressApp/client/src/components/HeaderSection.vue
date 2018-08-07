<template>
  <div id="headerContain">
    <div id="headerLogo">Address Book</div>
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

  #headerContain {
    background: rgb(114, 31, 192);
    color: white;
    text-align: center;
    font-size: 30px;
    padding: 4px 0;
    margin-bottom: 10px;
  }

</style>
