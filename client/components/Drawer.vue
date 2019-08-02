<template>
<v-toolbar-items class="hidden-md-and-up">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense>
        <v-list-tile @click="menus = false">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
            <router-link
                :to="{ name: ROUTE_NAME_HOME }"
            >
                Home
            </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="menus = false">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
            <router-link
                :to="{ name: ROUTE_NAME_ABOUT }"
            >
                About
            </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="menus = false">
          <v-list-tile-action>
            <v-icon>local_florist</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
            <router-link
                :to="{ name: ROUTE_NAME_SORT }"
            >
                Sort
            </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="menus = false">
          <v-list-tile-action>
            <v-icon>shop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
            <router-link
                :to="{ name: ROUTE_NAME_SHOP }"
            >
                Shop
            </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="menus = false">
          <v-list-tile-action>
            <v-icon>chat</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
            <router-link
                :to="{ name: ROUTE_NAME_CONTACT }"
            >
                Contact
            </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
      <v-toolbar-side-icon color="black--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
</v-toolbar-items>
</template>

<script>
import { ROUTE_NAME_HOME } from "@/constants";
import { ROUTE_NAME_ABOUT } from "@/constants";
import { ROUTE_NAME_SHOP } from "@/constants";
import { ROUTE_NAME_SORT } from "@/constants";
import { ROUTE_NAME_CONTACT } from "@/constants";
  export default {
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