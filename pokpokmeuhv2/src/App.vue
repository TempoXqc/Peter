<template>
  <div>
    <span class="bg"></span>
    <v-app>
      <v-main >
        <TwitchPlayer />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TwitchPlayer from "./components/vues/Twitch";

export default {
  name: "App",

  components: {
    TwitchPlayer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("assets/body-img.jpg");
}
</style>
