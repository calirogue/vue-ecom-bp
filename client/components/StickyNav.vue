<template>
  <v-toolbar
    dense
    fixed
    flat
    height="50px"
    class="nav-bar"
  >
    <div v-if="$auth.check()">
      Hi {{ $auth.user().name }}! <a
        id="logout"
        href=""
        class="logout white--text"
        @click.prevent="logOut"
      >Logout</a>
    </div>
    <div v-else>
      Hi! <router-link
        id="login"
        :to="{ name: ROUTE_NAME_LOGIN }"
        class="white--text text--lighten-1"
      >
        Sign in
      </router-link> or <router-link
        id="register"
        :to="{ name: 'register' }"
        class="white--text text--lighten-1"
      >
        register
      </router-link>.
    </div>
    <v-spacer />
    <v-btn
      v-if="!$auth.check('admin')"
      :to="{ name: ROUTE_NAME_CART }"
      icon
    >
      <v-badge
        left
        color="secondary"
      >
        <span
          v-if="cartItems"
          slot="badge"
          class="white--text text--lighten-1"
        >{{ cartItems }}</span>
        <v-icon>shopping_cart</v-icon>
      </v-badge>
    </v-btn>
    <Header />
  </v-toolbar>
</template>
<script>
import {
  ROUTE_NAME_LOGIN,
  ROUTE_NAME_CART,
  CART_COUNT
} from "@/constants";
import Item from "@/store/models/Item";
export default {
  name: "StickyNav",
  data: () => ({
    search: null,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_CART
  }),
  computed: {
    cartItems () {
      return this.$store.getters[`entities/items/${CART_COUNT}`];
    }
  },
  methods: {
    logOut () {
      Item.update({
        where: () => true,
        data: { cart: 0 }
      });
      this.$auth.logout();
    }
  }
};
</script>

<style lang="scss" scoped>
  .nav-bar {
    background-color: #774b63 !important;

  }
</style>
