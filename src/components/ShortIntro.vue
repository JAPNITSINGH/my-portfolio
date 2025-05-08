<template>
  <div class="intro">
    <h2 v-html="msg"></h2>
    
  </div>
</template>

<script>
export default {
  name: 'ShortIntro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 2rem 0 0;
}
h1 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.5rem;
}
a {
  color: #42b983;
}
</style>
