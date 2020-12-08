<template>
  <div class="main">
    <v-container fluid class="ma-0 pa-0">
      <v-layout row>
        <v-flex md1 xs1 >
          <NavigationDrawerStreamer />
        </v-flex>
        <v-flex md11 xs10>
          <div class="box-twitch">
            <div class="bloc-box-twitch">
              <input type="text" v-model="player[0].channel" />
              <TwitchPlayer
                :channel="player[0].channel"
                :width="width"
                :height="height"
                :volume="volume"
              />
              <input type="text" v-model="player[1].channel" />
              <TwitchPlayer
                :channel="player[1].channel"
                :width="width"
                :height="height"
                :volume="volume"
              />
            </div>
            <div class="bloc-box-twitch">
              <input type="text" v-model="player[2].channel" />
              <TwitchPlayer
                :channel="player[2].channel"
                :width="width"
                :height="height"
                :volume="volume"
              />
              <input
                type="text"
                v-model="player[3].channel"
                class="titre-streamer"
              />
              <TwitchPlayer
                :channel="player[3].channel"
                :width="width"
                :height="height"
                :volume="volume"
              />
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import NavigationDrawerStreamer from "../subComponents/NavigationDrawerStreamer";
import TwitchPlayer from "../subComponents/TwitchPlayer";
export default {
  components: {
    TwitchPlayer,
    NavigationDrawerStreamer,
  },
  data() {
    return {
      player: [
        { channel: "kokkalive" },
        { channel: "melocotontv" },
        { channel: "tkh_tv" },
        { channel: "#" },
      ],
      width: "100%",
      height: "350",
      volume: "0",
    };
  },

  beforeCreate(){
    this.$store.dispatch('loadStreamers');
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
  min-height: 100%;
  box-sizing: border-box;
}
.bloc-box-twitch {
  margin: 0 25px;
  width: 35%;
}
.titre-streamer {
}
</style>
