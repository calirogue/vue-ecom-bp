<template>
  <!--eslint-disable-next-line max-len vue/max-attributes-per-line-->
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
            column
  >
    <v-layout>
      <h1>Sort.</h1>
    </v-layout>
    <v-divider class="mt-2 mb-4" />
    <v-layout>
      <v-container
        fluid
        grid-list-lg
        class="px-0"
      >
        <v-layout
          row
          wrap
          class="item-summaries"
        >
          <SortSummary
            v-for="sort in sorts"
            :key="sort.id"
            :sort="sort"
          />
        </v-layout>
      </v-container>
    </v-layout>
  </v-layout>
</template>
<script>
import SortSummary from "@components/SortSummary";
import Sort from "@/store/models/Sort";
export default {
  name: "Home",
  components: {
    SortSummary
  },
  computed: {
    sorts: () => Sort.all()
  },
  created () {
    Sort.$fetch();
    // GET http://localhost:8080/items
  }
};
</script>
