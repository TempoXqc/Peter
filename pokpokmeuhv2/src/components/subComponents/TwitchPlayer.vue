<template>
  <iframe
    :src="testUrl"
    :height="height"
    :width="width"
    :volume="volume"
    class="box-video"
  ></iframe>
</template>

<script>
export default {
  props: {
    channel: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      baseUrl: "https://player.twitch.tv/",
      url: "",
    };
  },

  methods: {
    loadUrl() {
      this.url = `${this.baseUrl}?channel=${this.channel}&parent=${window.location.hostname}`;
    },
  },
  created() {
    this.loadUrl();
  },
  computed:{
    testUrl(){
      return `${this.baseUrl}?channel=${this.channel}&parent=${window.location.hostname}`;
    }
  },
};
</script>

<style>
.box-video {
  width: 100% !important;
  margin: 10px;
}
</style>
