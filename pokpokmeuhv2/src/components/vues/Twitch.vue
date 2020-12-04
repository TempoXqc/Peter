<template>
  <div class="main">
    {{ adresse() }}
    <div class="">
      <img src="../../assets/logo.png" class="img-logo" alt="" />
    </div>
    <div class="box-twitch">
      <div class="bloc-box-twitch">
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

      <div class="bloc-box-twitch">
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
      test: "https://player.twitch.tv/?channel=oonolive&parent=localhost",
      melo: "locklear",
      tkh: "kinggeorge",
      baba: "ambition_baba",
      shroud: "shroud",
      width: "100%",
      height: "350",
      volume: "0",
      baseUrl: "https://player.twitch.tv/",
      channel: "/?channel=",
    };
  },
  computed: {
    adresse(channel) {
      return (
        this.baseUrl +
        "/?channel=" +
        channel +
        +"&parent=" +
        this.melo +
        window.location.host
      );
    },
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
.bloc-box-twitch {
  margin: 0 25px;
  width: 35%;
}
.box-video {
  width: 100% !important;
  margin: 10px;
}
</style>
