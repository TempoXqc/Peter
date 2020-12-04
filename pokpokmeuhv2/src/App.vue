<template>
  <div>
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
  margin-top: 60px;
}
</style>
