<template>
  <!--eslint-disable-next-line max-len vue/max-attributes-per-line-->
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
            column
  >
    <v-flex xs12 sm12 md12>
      <v-container class="top-banner">
        <div class="row align-items-center justify-content-end">
          <div class="col-md-6">
            <h1 class="text-white">
              Do well.
              <br>Be easy.
            </h1>
          </div>
        </div>
        <!-- <div class="social-links">
          <a href="https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/11xifarm/?hl=en">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/11xibrand/">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div> -->
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>

export default {
  name: "Home"
};
</script>
