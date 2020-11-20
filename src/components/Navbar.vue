<template>
  <div class="navbar is-fixed-top"></div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  background-color: #283a7c;
  min-height: 60px;
}

#navbar.is-fixed-top {
    top: 0;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
