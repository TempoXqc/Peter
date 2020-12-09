<template>
  <v-navigation-drawer permanent expand-on-hover style="min-height:100vh;">
    <v-list-item class="px-2">
      <v-list-item-content>
        <img src="../../assets/logo.png" class="img-logo" alt="" />
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item class="px-3"
        v-for="item in getStreamers"
        :key="item"
      >
        <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"
              v-model="inputs"
              :value="item"
              :disabled="inputs.length > 3 && inputs.indexOf(item) === -1"
              number> Item {{ item }} {{ inputs.indexOf(item) }}></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    inputs: {
      set(val){this.$store.state.inputs = val},
      get(){ return this.$store.state.inputs }
    },
      ...mapGetters(["getStreamers"]),
  },
};
</script>
