import vue from "vue";
import vuex from "vuex";
import axios from "axios";
vue.use(vuex);
export const store = new vuex.Store({
  state: {
    streamers: [],
    inputs: []
  },
  getters: {
    getStreamers: (state) => {
      return state.streamers;
    },
    getInputs: (state) => {
      return state.inputs;
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
    },
    addInput: (state, input) => {
      state.inputs.push(input);
    },
    addAllInputs: (state, inputs) =>{
        inputs.forEach(e => {
            state.inputs.push(e);
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
