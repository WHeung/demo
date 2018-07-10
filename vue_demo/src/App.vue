<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  -webkit-tap-highlight-color: transparent;
}

body, html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
}

div,p,ul,ol,li,span,a,button,input,textarea,form {
  margin: 0;
  padding: 0;
}

button,input,textarea,form {
  border: 0;
}

i {
  font-style: normal;
}

ul,ol {
  list-style: none;
}

input, button, textarea, select {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: 0;
  background: none;
  -webkit-appearance: none;
  outline: none;
}

a {
  text-decoration: none;
}

</style>
