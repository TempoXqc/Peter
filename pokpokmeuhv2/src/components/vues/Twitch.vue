<template>
  <div class="main">
    <div class="">
      <img src="../../assets/logo.png" class="img-logo" alt="" />
    </div>
    <div class="box-twitch">
      <div style="margin: 0 25px; width:35%">
        <h2>TKH</h2>
        <iframe
          :src="test"
          :height="height"
          :width="height"
          :volume="volume"
          class="box-video"
        ></iframe>
        <h2>TKH</h2>
        <iframe
          :src="test"
          :height="height"
          :width="height"
          :volume="volume"
          class="box-video"
        ></iframe>
      </div>

      <div style="margin: 0 25px; width:35%">
        <h2>TKH</h2>
        <iframe
          :src="test"
          :height="height"
          :width="height"
          :volume="volume"
          class="box-video"
        ></iframe>
        <h2>TKH</h2>
        <iframe
          :src="test"
          :height="height"
          :width="height"
          :volume="volume"
          class="box-video"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test:
        "https://player.twitch.tv/?channel=oonolive&parent=pokpokmeuh.s3.us-east-2.amazonaws.com",
      melo: "locklear",
      tkh: "kinggeorge",
      baba: "ambition_baba",
      shroud: "shroud",
      width: "100%",
      height: "350",
      volume: "0",
    };
  },
};
</script>

<style>
.img-logo {
  width: 5%;
  border-radius: 150px;
}

h2 {
  margin: 0;
  color: white;
}
.box-twitch {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}
.box-video {
  width: 100% !important;
  margin: 10px;
}
</style>
