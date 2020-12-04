<template>
  <div id="app">
    <Twitch />
  </div>
</template>

<script>
import Twitch from "./components/vues/Twitch";

export default {
  name: "App",
  components: {
    Twitch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(assets/body-img.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
