<template>
  <!--eslint-disable-next-line max-len vue/max-attributes-per-line-->
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
            column
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm12
        md12
      >
        <v-card
          dark
          tile
          flat
        >
          <v-img
            :aspect-ratio="16/10"
            :src="require('@/images/home-hero2.jpg')"
          >
            <v-layout
              pa-2
              column
              fill-height
              class="lightbox white--text"
            >
              <v-spacer />
              <v-card-actions class="justify-center">
                <div class="social-links">
                  <a href="https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true">
                      <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/11.xibrand/?hl=en">
                      <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/11xibrand/">
                      <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
              </v-card-actions>
            </v-layout>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>

    <v-container
      wrap
      fluid
      grid-list-lg
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          md6
        >
          <v-card
            dark
            tile
            flat
            color="grey lighten-2"
          >
            <v-card-text class="align-center">
              <v-img
                :aspect-ratio="11/10"
                :src="require('@/images/tst2.jpg')"
              />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm6
          md6
        >
          <v-card
            dark
            tile
            flat
            color="white darken-3 black--text"
          >
            <v-card-text>
              <p>
                Located in Southern Oregon, 11:XI cultivates high quality cannabis by using organic soil, pesticide free,
                handpicked and crafted for different elevated effects. Each strain is cultivated by our expert team of
                growers who have the expertise to develop a variety of unique and classic strains for your individual
                needs.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-flex>
        <v-card-actions
          flat
          tile
          class="subheading justify-center"
        >
          Most Popular
        </v-card-actions>
      </v-flex>
      <v-spacer />
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          md4
        >
          <v-card
            dark
            tile
            color="blue darken-3"
          >
            <v-card-text>
              <p>blue</p>
              <v-img
                :aspect-ratio="11/10"
                :src="require('@/images/bluedream.jpg')"
              />
              <v-btn
                name="wm"
                large
                color="blue-grey darken-4 white--text"
                class="elevation-0 ma-0"
              >
                More info
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm6
          md4
        >
          <v-card
            dark
            tile
            color="purple darken-3 black--text"
          >
            <v-card-text>
              <p>purple</p>
              <v-img
                :aspect-ratio="11/10"
                :src="require('@/images/purplecookies.jpg')"
              />
              <v-btn
                name="wm"
                large
                color="blue-grey darken-4 white--text"
                class="elevation-0 ma-0"
              >
                More info
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm6
          md4
        >
          <v-card
            dark
            tile
            color="white darken-3 black--text"
          >
            <v-card-text>
              <p>test</p>
              <v-img
                :aspect-ratio="11/10"
                :src="require('@/images/mickeykush.jpg')"
              />
              <v-btn
                name="wm"
                large
                color="blue-grey darken-4 white--text"
                class="elevation-0 ma-0"
              >
                More info
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
export default {
  data: () => ({

  })
};
</script>

<style lang="scss" scoped>
    h1 {
      font-weight: 700;
      font-size: 6.5em;
      left: 300px;
      position: relative;
    }

  .social-links {
    position: absolute;
    bottom: 0px;
    right: 0px;
    font-size: 0px;
    a {
      position: relative;
      width: 60px;
      height: 60px;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      line-height: 60px;
      text-align: center;
      color: #fff;
    }
  }

  .subheading {
    line-height: 70px;
    font-size: 30px;
    font-weight: 700;
  }
</style>
