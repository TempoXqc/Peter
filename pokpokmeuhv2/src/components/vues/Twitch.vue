<template>
  <div class="main">
    <v-container fluid class="ma-0 pa-0">
      <v-layout row>
        <v-flex md5 style="position:absolute; z-index:1000;">
          <NavigationDrawerStreamer />
        </v-flex>
        <v-flex md12 style="top:0; position:fixed;left:25vh">
          <div class="box-twitch">
            <div class="bloc-box-twitch">
              <TwitchPlayer
                :channel="inputs[0] == null ? streamers[0] : inputs[0]"
                :width="width"
                :height="height"
                :volume="volume"
              />
              <TwitchPlayer
                :channel="inputs[1] == null ? streamers[1] : inputs[1]"
                :width="width"
                :height="height"
                :volume="volume"
              />
            </div>
            <div class="bloc-box-twitch">
              <TwitchPlayer
                :channel="inputs[2] == null ? streamers[2] : inputs[2]"
                :width="width"
                :height="height"
                :volume="volume"
              />
              <TwitchPlayer
                :channel="inputs[3] == null ? streamers[3] : inputs[3]"
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
import {mapState} from "vuex"
export default {
  components: {
    TwitchPlayer,
    NavigationDrawerStreamer,
  },
  data() {
    return {
      width: "100%",
      height: "350",
      volume: "0",
    };
  },

  computed: {
    ...mapState(["inputs"]),
    ...mapState(["streamers"])
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
