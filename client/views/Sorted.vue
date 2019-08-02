<template>
  <v-layout
    :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
    class="item"
  >
    <v-flex xs12>
      <v-card
        flat
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm6
            md4
          >
            <v-img :src="sort.image" />
          </v-flex>
          <v-flex
            :class="{ 'pl-4': $vuetify.breakpoint.smAndUp, 'pa-4': $vuetify.breakpoint.xsOnly }"
            xs12
            sm6
            md8
          >
            <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp, 'pb-3': $vuetify.breakpoint.xsOnly }">
              <h1 class="mb-2">
                {{ sort.name }}
              </h1>
              <h3 class="mb-3 pink--text text--darken-1">
                {{ sort.description }}, {{ sort.type }}
              </h3>
              <h4 class="mb-3 pink--text text--darken-1">
                CDB: {{ sort.cbd }} | THC: {{ sort.thc }}
              </h4>
              <h4 class="mb-3 pink--text text--darken-1">
                {{ sort.effects }} | {{ sort.flavor }}
              </h4>
            </div>
            <v-divider />
            <v-layout>
              <v-flex
                xs12
                md8
                lg6
              >
                <v-responsive
                  color="grey lighten-4"
                  height="150px"
                >
                  <v-layout wrap>
                    <v-flex
                      sm12
                      md6
                      class="pa-3"
                    />
                    <v-flex
                      sm12
                      md6
                      class="pa-3"
                    >
                      <v-btn
                        v-if="!$auth.check('admin')"
                        name="add-to-cart"
                        large
                        color="blue-grey darken-4 white--text"
                        class="elevation-0 ma-0"
                        @click="addToCart"
                      >
                        Request a sample
                      </v-btn>
                      <v-btn
                        v-else
                        name="add-to-cart"
                        large
                        color="blue-grey darken-4 white--text"
                        class="elevation-0 ma-0"
                        :to="`/sorts/${sort.id}/edit`"
                      >
                        Edit Sort
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-responsive>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { currency } from "@/filters";
import Sort from "@/store/models/Sort";
export default {
  name: "SortItem",
  filters: { currency },
  computed: {
    sort () {
      return Sort.find(this.$route.params.id) || {};
    }
  },
  created () {
    if (!Sort.find(this.$route.params.id)) {
      Sort.$get({
        params: {
          id: this.$route.params.id
        }
      });
    }
  },
  methods: {
    addToCart () {
      Sort.update({
        where: this.$route.params.id,
        data (sort) {
          sort.cart++;
        }
      });
    }
  }
};
</script>
<style scoped lang="stylus">
  .item
    img
      width: 100%;
      display: block;
  .price
    text-align: center
    span
      font-size: 2.2em;
</style>
