<template>
  <div>
    <v-alert
      v-if="alertMessage"
      :value="alertMessage !== null"
      :type="alertType"
      transition="scale-transition"
      @click="hideAlert"
    >
      {{ alertMessage }}
    </v-alert>
    <v-form
      class="px-5 py-4"
      name="sell"
    >
      <InputSortName
        :id="id"
        ref="SortName"
        :model="model"
        :external-errors="sortNameAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputArtist
        :id="id"
        ref="description"
        :model="model"
        :external-errors="artistAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputArtist
        :id="id"
        ref="type"
        :model="model"
        :external-errors="artistAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputImage
        :id="id"
        ref="image"
        :model="model"
        :external-errors="imageAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputPrice
        :id="id"
        ref="cbd"
        :model="model"
        :external-errors="priceAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputPrice
        :id="id"
        ref="thc"
        :model="model"
        :external-errors="priceAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputArtist
        :id="id"
        ref="effects"
        :model="model"
        :external-errors="artistAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputArtist
        :id="id"
        ref="flavor"
        :model="model"
        :external-errors="artistAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <v-btn
        name="submit"
        color="blue-grey darken-4 white--text"
        class="elevation-0 mx-0"
        @click="save"
      >
        Save
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import InputSortName from "@components/InputSortName";
import InputArtist from "@components/InputArtist";
import InputYear from "@components/InputYear";
import InputImage from "@components/InputImage";
import InputPrice from "@components/InputPrice";
import { TEMP_SORT_ID } from "@/constants";
import Sort from "@/store/models/Sort";

export default {
  name: "SortForm",
  components: {
    InputSortName,
    InputArtist,
    InputYear,
    InputImage,
    InputPrice
  },
  mixins: [validationMixin],
  data: () => ({
    alertType: null,
    alertMessage: null,
    sortNameAPIErrors: [],
    sortNameErrorState: false,
    artistAPIErrors: [],
    artistErrorState: false,
    yearAPIErrors: [],
    yearErrorState: false,
    imageAPIErrors: [],
    imageErrorState: false,
    priceAPIErrors: [],
    priceErrorState: false,
    model: Sort
  }),
  computed: {
    id () {
      return this.$route.params.id || TEMP_SORT_ID;
    }
  },
  methods: {
    inputErrorStateChange (type, state) {
      this[`${type}ErrorState`] = state;
    },
    sendData () {
      const { id } = this;
      const data = Sort.find(id);
      if (id === TEMP_SORT_ID) {
        Sort.delete(id);
        return Sort.$create({ data });
      } else {
        return Sort.$update({
          params: { id },
          data
        });
      }
    },
    successCallback (id) {
      this.$router.push(`/sorts/${id}`);
    },
    errorCallback () {
      this.showAlert(
        "error",
        "There has been an error with your submission. Please try again."
      );
    },
    async save () {
      this.$refs.title.validate();
      this.$refs.artist.validate();
      this.$refs.year.validate();
      this.$refs.image.validate();
      this.$refs.price.validate();
      await this.$nextTick();
      if (
        !this.sortNameErrorState &&
        !this.artistErrorState &&
        !this.yearErrorState &&
        !this.imageErrorState &&
        !this.priceErrorState
      ) {
        try {
          const { id } = await this.sendData();
          this.successCallback(id);
        } catch (err) {
          this.errorCallback();
        }
      }
    },
    showAlert (type, message) {
      this.alertType = type;
      this.alertMessage = message;
    },
    hideAlert () {
      this.alertMessage = null;
    }
  }
};
</script>
