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
        :key="item.title"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      items: [
        {
          title: "Général",
          icon: "mdi-view-dashboard",
          route: "/admin/general",
        },
        {
          title: "Utilisateurs",
          icon: "mdi-clipboard-account",
          route: "/admin/utilisateurs",
        },
        {
          title: "Projets",
          icon: "mdi-folder",
          route: "/admin/admin-projects",
        },
        { title: "Rôles", icon: "mdi-layers-triple", route: "/admin/roles" },
        {
          title: "Azure",
          icon: "mdi-microsoft-azure-devops",
          route: "/admin/azure",
        },
        {
          title: "Clients",
          icon: "mdi-account-cash",
          route: "/admin/clients",
        },
      ],
      right: null,
    };
  },
  computed: {
      ...mapGetters(["getStreamers"])
  },
};
</script>
