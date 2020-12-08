import vue from "vue";
import vuex from "vuex";
import axios from "axios";
vue.use(vuex);
export const store = new vuex.Store({
  state: {
    streamers: [],
  },
  getters: {
    getStreamers: (state) => {
      return state.streamers;
    },
  },
  mutations: {
    addStreamer: (state, streamer) => {
      state.streamer.push(streamer);
    },
    addAllStreamer: (state, streamers) =>{
        streamers.forEach(e => {
            state.streamers.push(e);
        });
    }
  },
  actions: {
    loadStreamers: ({ commit }) => {
      axios
        .get("https://get-streamers-api.herokuapp.com/streamers")
        .then((Response) => {
            let streamers = Response.data
            commit('addAllStreamer', streamers);
        });
    },
  },
});
