<template>
  <v-flex
    xs12
    sm6
    md3
    class="item-summary"
  >
    <router-link :to="{ name: ROUTE_NAME_SORTED, params: { id: sort.id }}">
      <v-card
        :class="{ 'elevation-0': !hovered, 'elevation-5': hovered }"
        height="100%"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <v-img
          :src="sort.image"
          height="225px"
        />
        <v-card-title primary-title>
          <div>
            <h3 class="grey--text text--darken-1">
              {{ sort.name }}
            </h3>
            <h4 class="pink--text text--darken-1">
              {{ sort.description }}
            </h4>
            <h4 class="pink--text text--darken-1">
              Type: {{ sort.type }}
            </h4>
            <h4 class="pink--text text--darken-1">
              Effects: {{ sort.effects }}
            </h4>
            <h4 class="pink--text text--darken-1">
              Flavor: {{ sort.flavor }}
            </h4>
            <p>
              CDB: {{ sort.cbd }}
              THC: {{ sort.thc }}
            </p>
          </div>
        </v-card-title>
      </v-card>
    </router-link>
  </v-flex>
</template>
<script>
import { ROUTE_NAME_SORTED } from "@/constants";
export default {
  name: "SortSummary",
  props: {
    sort: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    hovered: false,
    ROUTE_NAME_SORTED
  })
};
</script>

<style scoped lang="stylus">
.item-summary > a
  text-decoration: none;
</style>
