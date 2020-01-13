<template>
  <div id="app">
    <app-header></app-header>
    <app-search @searchResult="searched"></app-search>
    <div class="container-fluid padding">
      <div class="row">
        <app-results :result="search" v-show="searchView"
        @songAdded="addToPlaylist" @artistLookup="viewArtist"></app-results>
        <app-artist v-show="artistView" :artist="artist"></app-artist>
        <app-playlist :playList="playList"></app-playlist>
      </div>
    </div>

  </div>
</template>

<script>
import header from './components/header.vue';
import search from './components/search.vue';
import results from './components/results.vue';
import artist from './components/artist.vue';
import playlist from './components/playlist.vue';

export default {
  name: 'app',
  data() {
    return {
      search: null,
      playList: [],
      artistView: false,
      searchView: true,
      artist: null,
    };
  },
  components: {
    appHeader: header,
    appSearch: search,
    appResults: results,
    appArtist: artist,
    appPlaylist: playlist,
  },
  methods: {
    searched(value) {
      this.search = value;
      this.artistView = !this.artistView;
      this.searchView = !this.searchView;
      this.$forceUpdate();
    },
    addToPlaylist(song) {
      this.playList.push(song);
    },
    viewArtist(songArtist) {
      this.artistView = !this.artistView;
      this.searchView = !this.searchView;
      this.artist = songArtist;
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
.padding {
  margin-top: 100px;
}
</style>
