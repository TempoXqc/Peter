<template>
  <div class="box-twitch">
    <VueTwitchPlayer
      class="box-video"
      :channel="melo.channel"
      :width="melo.width"
      :height="melo.height"
    ></VueTwitchPlayer>

    <VueTwitchPlayer
      class="box-video"
      :channel="tkh.channel"
      :width="tkh.width"
      :height="tkh.height"
    ></VueTwitchPlayer>

    <VueTwitchPlayer
      class="box-video"
      :channel="baba.channel"
      :width="baba.width"
      :height="baba.height"
    ></VueTwitchPlayer>

    <VueTwitchPlayer
      class="box-video"
      :channel="shroud.channel"
      :width="shroud.width"
      :height="shroud.height"
    ></VueTwitchPlayer>
  </div>
</template>

<script>
import VueTwitchPlayer from "vue-twitch-player";

export default {
  components: {
    VueTwitchPlayer,
  },
  data() {
    return {
      melo: {
        channel: "locklear",
        width: "100%",
        height: "550",
      },
      tkh: {
        channel: "kinggeorge",
        width: "100%",
        height: "550",
      },
      baba: {
        channel: "ambition_baba",
        width: "100%",
        height: "550",
      },
      shroud: {
        channel: "shroud",
        width: "100%",
        height: "550",
      },
    };
  },
};
</script>

<style>
.box-twitch {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}
.box-video {
  width: 50% !important;
}
</style>
