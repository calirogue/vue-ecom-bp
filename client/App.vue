<template>
  <div id="app">
    <v-app>
      <StickyNav />
      <FixedNav />
      <Drawer />
      <confirmation />
      <v-content>
        <v-container fluid>
          <router-view :key="$route.path" />
        </v-container>
      </v-content>
      <PageFooter />
    </v-app>
  </div>
</template>
<script>
import confirmation from "./components/confirmation";
import PageFooter from "@components/PageFooter";
import StickyNav from "@components/StickyNav";
import Drawer from "@components/Drawer";
import FixedNav from "@components/FixedNav";
export default {
  components: {
    PageFooter,
    StickyNav,
    confirmation,
    Drawer,
    FixedNav
  },
  data () {
    return {
      confirmation: false
    }
  }
};
</script>
