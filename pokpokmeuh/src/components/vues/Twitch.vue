<template>
  <div>
    {{ name }}
    <VueTwitchPlayer :channel="channel"></VueTwitchPlayer>
  </div>
</template>

<script>
import VueTwitchPlayer from "vue-twitch-player";

export default {
  // ...
  components: {
    VueTwitchPlayer,
  },
  data() {
    return {
      channel: "locklear",
    };
  },
  // ...
};
</script>

<style scoped></style>
