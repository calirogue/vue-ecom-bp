<template>
  <v-toolbar
    class="fixed-nav"
    flat
    dark
    right
    color="white"
  >
    <img
      class="logo"
      src="/public/logo.png"
    >
    <v-toolbar-items class="nav-bar hidden-sm-and-down">
      <router-link
        :to="{ name: ROUTE_NAME_HOME }"
      >
        Home |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_ABOUT }"
      >
        About Us |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_SHOP }"
      >
        Shop |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_SORT }"
      >
        Sort |
      </router-link>
      <router-link
        :to="{ name: ROUTE_NAME_CONTACT }"
      >
        Contact
      </router-link>
    </v-toolbar-items>
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
      color: #774b63 !important;
      font-size: 15px;
      line-height: 60px;
      font-weight: 800;
      text-align: center;
      vertical-align: top;
      display: inline-block;
      width: 75px;

</style>
