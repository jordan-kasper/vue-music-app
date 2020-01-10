<template>
  <div id="app">
    <app-header></app-header>
    <app-search @searchResult="searched"></app-search>
    <app-results :result="search"></app-results>
  </div>
</template>

<script>
import header from './components/header.vue';
import search from './components/search.vue';
import results from './components/results.vue';

export default {
  name: 'app',
  data() {
    return {
      search: null,
    };
  },
  components: {
    appHeader: header,
    appSearch: search,
    appResults: results,
  },
  methods: {
    searched(value) {
      this.search = value;
      this.$forceUpdate();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
