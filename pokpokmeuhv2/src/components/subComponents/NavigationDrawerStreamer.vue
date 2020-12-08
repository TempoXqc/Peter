<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <img src="../../assets/logo.png" class="img-logo" alt="" />
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in getStreamers"
        :key="item"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed: {
      ...mapGetters(["getStreamers"])
  },
};
</script>
