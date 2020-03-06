<template>
  <div class=" container-fluid padding-top">
    <h2>Search Song or Artist</h2>
    <div
      class="form-row align-items-center justify-content-center padding-bottom"
    >
      <form class="col-sm-3 my-1 form-group">
        <label class="sr-only" for="inlineFormInputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="inlineFormInputName"
          placeholder="Jane Doe"
          v-model="searchValue"
          required
          data-cy="search"
        />
      </form>
      <div class="col-auto my-1">
        <button
          class="btn btn-primary"
          type="submit"
          v-on:click="searchedString"
          data-cy="submit"
        >
          Search Music
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      searchValue: null,
    };
  },

  methods: {
    /**
     * Sending back search result app main
     *
     */
    searchedString() {
      this.$emit('searchResult', this.searchValue);
    },
  },
};
</script>

<style scoped>
.padding-top {
  margin-top: 150px;
}
.padding-bottom {
  margin-top: 50px;
}
</style>
