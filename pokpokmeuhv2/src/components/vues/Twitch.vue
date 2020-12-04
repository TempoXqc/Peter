<template>
  <div class="main">
    <div class="">
      <img src="../../assets/logo.png" class="img-logo" alt="" />
    </div>
    <div class="box-twitch">
      <div class="bloc-box-twitch">
        <TwitchPlayer
          :channel="melo"
          :width="width"
          :height="height"
          :volume="volume"
        />
        <TwitchPlayer
          :channel="tkh"
          :width="width"
          :height="height"
          :volume="volume"
        />
      </div>
      <div class="bloc-box-twitch">
        <TwitchPlayer
          :channel="baba"
          :width="width"
          :height="height"
          :volume="volume"
        />
        <TwitchPlayer
          :channel="shroud"
          :width="width"
          :height="height"
          :volume="volume"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TwitchPlayer from "../subComponents/TwitchPlayer";
export default {
  components: {
    TwitchPlayer,
  },
  data() {
    return {
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
.bloc-box-twitch {
  margin: 0 25px;
  width: 35%;
}
</style>
