<template>
  <div class=" container-fluid padding">
    <h2>Search Song or Artist</h2>
    <div class="form-row align-items-center justify-content-center">
      <div class="col-sm-3 my-1">
        <label class="sr-only" for="inlineFormInputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="inlineFormInputName"
          placeholder="Jane Doe"
          v-model="searchValue"
        />
      </div>
      <div class="col-auto my-1">
        <button class="btn btn-primary" @click="searchedString()">
          Search Music
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    searchedString() {
      this.$emit('searchResult', this.searchValue);
    },
  },
};
</script>

<style scoped>
.padding {
  margin-top: 150px;
}
</style>
