<template>
  <div class="box-twitch">
    <VueTwitchPlayer
      class="box-video"
      :channel="melo"
      :width="width"
      :height="height"
    ></VueTwitchPlayer>

    <VueTwitchPlayer
      class="box-video"
      :channel="tkh"
      :width="width"
      :height="height"
    ></VueTwitchPlayer>

    <VueTwitchPlayer
      class="box-video"
      :channel="baba"
      :width="width"
      :height="height"
    ></VueTwitchPlayer>

    <VueTwitchPlayer
      class="box-video"
      :channel="shroud"
      :width="width"
      :height="height"
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
      melo: "locklear",
      tkh: "kinggeorge",
      baba: "ambition_baba",
      shroud: "shroud",
      width:"100%",
      height:"450"
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
