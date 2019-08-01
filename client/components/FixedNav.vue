<template>
  <v-toolbar
    class="fixed-nav"
    flat
    dark
    right
    color="white"
  >
    <img
      src="/public/logo.png"
    >
    <v-toolbar-title class="nav-bar">
      <router-link
        :to="{ name: ROUTE_NAME_HOME }"
        class="purple--text"
      >
        Home |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_ABOUT }"
        class="purple--text"
      >
        About Us |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_SHOP }"
        class="purple--text"
      >
        Shop |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_SORT }"
        class="purple--text"
      >
        Sort |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_CONTACT }"
        class="purple--text"
      >
        Contact
      </router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>
<script>
import { ROUTE_NAME_HOME } from "@/constants";
import { ROUTE_NAME_ABOUT } from "@/constants";
import { ROUTE_NAME_SHOP } from "@/constants";
import { ROUTE_NAME_SORT } from "@/constants";
import { ROUTE_NAME_CONTACT } from "@/constants";
export default {
  name: "FixedNav",
  data: () => ({ 
    ROUTE_NAME_HOME,
    ROUTE_NAME_ABOUT,
    ROUTE_NAME_SHOP,
    ROUTE_NAME_SORT,
    ROUTE_NAME_CONTACT
  })
};
</script>
<style scoped lang="stylus">
  .fixed-nav
    img
      height: 34px;
    a
      text-decoration: none;

  .nav-bar
    font-size: 14px;

</style>
