<template>
  <div class="box-twitch">
    <div>
      <iframe
        :src="test"
        :height="height"
        :width="height"
        class="box-video"
      ></iframe>

      <iframe
        :src="test"
        :height="height"
        :width="height"
        class="box-video"
      ></iframe>
    </div>

    <div>
      <iframe
        :src="test"
        :height="height"
        :width="height"
        class="box-video"
      ></iframe>

      <iframe
        :src="test"
        :height="height"
        :width="height"
        class="box-video"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "https://player.twitch.tv/?channel=richwcampbell&parent=localhost",
      melo: "locklear",
      tkh: "kinggeorge",
      baba: "ambition_baba",
      shroud: "shroud",
      width: "100%",
      height: "450",
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
  width: 100% !important;
}
</style>
