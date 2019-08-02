<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
      eager
    >

      <v-card>
        <v-card-title
          class="headline white"
          primary-title
        >
          Do well.<br>Be easy.
        </v-card-title>

        <v-card-text>
        <v-img
          class="logo"
          src="/public/logo.png"
        />
        Oregon law requires to be 21 or older to enter the website. Do not operate a vehicle or machinery under the influence of this drug. For use only by adults twenty-one years of age and older. Keep out of reach of children.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I Verify I am 21 years or older
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>

<style scoped lang="stylus">
  .fixed-nav
    img
      height: 14px;
    a
      text-decoration: none;
      color: #774b63 !important;
      font-size: 15px;

</style>