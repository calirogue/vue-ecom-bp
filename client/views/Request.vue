<template>
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }">
    <v-flex
      sm8
      offset-sm2
    >
      <h1 class="mb-3">
        {{ title }}
      </h1>
      <v-divider class="mt-2 mb-4" />
      <v-card>
        <SortForm />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import SortForm from "@components/SortForm";
import Sort from "@/store/models/Sort";
import { TEMP_SORT_ID } from "@/constants";
export default {
  name: "Request",
  components: {
    SortForm
  },
  computed: {
    title () {
      return this.$route.params.id ? "Edit sort" : "Request new sort";
    }
  },
  async beforeRouteEnter (to, from, next) {
    const { id } = to.params;
    if (id) {
      if (!Sort.find(id)) {
        await Sort.$get({ params: { id } });
      }
    } else {
      Sort.create({ data: { id: TEMP_SORT_ID } });
    }
    next();
  }
};
</script>
