<template>
  <v-layout
    :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
    column
  >
    <v-container>
      <v-card-title>
        <h1>About Us</h1>
        <h3>What we do</h3>
      </v-card-title>
    </v-container>

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
              11:XI prides itself with our organic Southern Oregon sun-grown cannabis. From our soil to pest
              management, we maintain an all organic stand on all fronts. Our high THC producing genetics, along
              with their fantastic aromatic/flavorful terpene profiles show the care and passion our grow team have
              for our product. From seeds and clones, all our plants are raised in-house and groomed/inspected daily
              for the best over-all health for our plants.
            </p>
            <br>
            <p>
              Our plants are flushed weeks before harvest to ensure full nutrient release, and final up take to
              ensure top quality flavor and enjoyment. All product is harvested by hand, dried, hand trimmed, then
              sealed for optimal curing. We have a strong commitment to create the best quality cannabis
              consistently.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

 <v-layout wrap row v-for="team, index in teams" v-if="index == showTeam">
      <v-flex xs12 sm6 md6 order-md1 order-xs1>
        <v-card dark tile flat color="grey black--text lighten-3">
        <h2>Our Team</h2>
        <v-card-text>
          {{ team.name }}
        </v-card-text>
        <v-card-text>
          {{ team.position }}
        </v-card-text>
        <v-card-text>
          {{ team.bio }}
        </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6 order-md2 order-xs2>
        <v-card dark tile flat color="grey lighten-3">
          <v-card-text>
            <v-img :aspect-ratio="11/10" :src="team.image" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12 order-md3 order-xs3>
        <v-card tile flat color="indigo darken-3">
          <v-card flat tile>
                  <v-btn
                    color="black--text"
                    class="elevation-0 mx-0"
                    @click="prevTeam"
                  >
                    <v-icon>arrow_left</v-icon>
                  </v-btn>
                  <v-btn
                    color="black--text"
                    class="elevation-0 mx-0"
                    @click="nextTeam"
                  >
                    <v-icon>arrow_right</v-icon>
                  </v-btn>
          </v-card>
        <v-card flat tile md3>
            <v-card-text class="team-index">{{index+1 }} | {{ teams.length }}</v-card-text>
        </v-card>
        </v-card>
      </v-flex>
 </v-layout>

  <v-layout row wrap>
    <v-container>
      <h2>Our Lifestyle</h2>
    </v-container>
    <v-flex xs12 sm12 md12>
    <v-container
      fluid
      grid-list-md
      pa-2
    >
      <v-layout
        wrap
      >
        <v-flex
          v-for="card in cards"
          :key="card.title"
          v-bind="{ [`xs${card.flex}`]: true }"
        >
          <v-card>
            <v-img
              :src="card.image"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-flex>
  </v-layout>

  </v-layout>
</template>

<script type="text/javascript">
export default {
  name: "About",
  props: ["user"],
  data () {
    return {
      showTeam: 0,
      teams: [
        {
          image: require("@/images/cody.jpg"),
          name: "Cody",
          position: "Grow Manager and Cultivation Coordinator",
          bio: "Meet Cody: Raised in the backwoods of New York, the sunny beaches of South Carolina, and the green fields of Oregon. When he's not tending to the growth of our green ladies, you can find him on the disc-golf course, wandering the woods, or playing video games. As a self proclaimed Master of Green-tape, \"I never truly feel like I'm at work when working with our plants. I live to love, laugh, and grow.\"",
          linkedin:
            "https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true",
          instagram: "https://www.instagram.com/11xifarm/?hl=en",
          facebook: "https://www.facebook.com/11xibrand/"
        },
        {
          image: require("@/images/julee.jpg"),
          name: "Ju'Lee",
          position: "Office/Farm Manager and METRC Compliance",
          bio: "Meet Ju'Lee: Oregon Local who hails from the farming mecca that is Eastern Oregon. Ju'Lee is in charge of daily operations where you can find her anywhere from making sales to dispensaries to working the field. She is truly an integral part of our team.",
          linkedin:
            "https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true",
          instagram: "https://www.instagram.com/11xifarm/?hl=en",
          facebook: "https://www.facebook.com/11xibrand/"
        },
        {
          image: require("@/images/tony.jpg"),
          name: "Tony",
          position: "Business Development",
          bio: "Meet Tony: Hometown: Long Beach, California. Been studying in Eugene since 2016, my hobbies include sports, specifically soccer, music events, and traveling to new places! Speak Spanish and German (for fun!)",
          linkedin:
            "https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true",
          instagram: "https://www.instagram.com/11xifarm/?hl=en",
          facebook: "https://www.facebook.com/11xibrand/"
        },
        {
          image: require("@/images/john.jpg"),
          name: "John",
          position: "Business Development",
          bio: "Meet John: Hometown Phoenix Az. Hobbies include music, I play Guitar, Bass Guitar, percussion and a little piano! I have also been working on cars since I was 5 years old. I love camping and hiking as well!",
          linkedin:
            "https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true",
          instagram: "https://www.instagram.com/11xifarm/?hl=en",
          facebook: "https://www.facebook.com/11xibrand/"
        }
      ],
      cards: [
        { 
          title: 'Just be free',
          image: require("@/images/barn.jpg"),
          flex: 4 
        },
        { 
        title: 'Do what makes you happy', 
        image: require("@/images/oregonred.jpg"),
        flex: 8 
        },
        { 
          title: 'Time you enjoy is not wasted time', 
          image: require("@/images/tractorpic.jpg"),
          flex: 6 
        },
        { 
          title: 'Favorited road trips', 
          image: require("@/images/oregonhiking.jpg"), 
          flex: 6 
        },
        { 
          title: 'Dont have to be perfect to be amazing', 
          image: require("@/images/about-lifestyle4.jpg"), 
          flex: 
        12 },
      ],
    e1: 0,
    e6: 1
    };
  },
  mounted () {},
  methods: {
    prevTeam () {
      if (this.showTeam == 0) {
        this.showTeam = this.teams.length - 1;
      } else {
        this.showTeam--;
      }
    },
    nextTeam () {
      if (this.showTeam == this.teams.length - 1) {
        this.showTeam = 0;
      } else {
        this.showTeam++;
      }
    }
  }
};
</script>
