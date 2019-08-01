<template>
    <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense>
        <v-list-tile @click="menus = false">
          <v-list-tile-content>
            <v-list-tile-title>
                <router-link
                    :to="{ name: ROUTE_NAME_HOME }"
                    class="purple--text"
                >
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="menus = false">
          <v-list-tile-content>
            <v-list-tile-title>
                <router-link
                    :to="{ name: ROUTE_NAME_ABOUT }"
                    class="purple--text"
                >
                    About Us
                </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="menus = false">
          <v-list-tile-content>
            <v-list-tile-title>
                <router-link
                    :to="{ name: ROUTE_NAME_SHOP }"
                    class="purple--text"
                >
                    Shop |
                </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo darken-3" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>Abstract | Design</v-toolbar-title>
      <v-toolbar-side-icon color="pink darken-3" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    </div>
</template>

<script>
import { ROUTE_NAME_HOME } from "@/constants";
import { ROUTE_NAME_ABOUT } from "@/constants";
import { ROUTE_NAME_SHOP } from "@/constants";
import { ROUTE_NAME_SORT } from "@/constants";
import { ROUTE_NAME_CONTACT } from "@/constants";
  export default {
    name: "Header",
    data: () => ({
        drawer: null,
        ROUTE_NAME_HOME,
        ROUTE_NAME_ABOUT,
        ROUTE_NAME_SHOP,
        ROUTE_NAME_SORT,
        ROUTE_NAME_CONTACT
    }),
    props: {
      source: String
    }
  }
</script>