<template>
  <div id="app">
    <app-header></app-header>
    <app-search @searchResult="searched"></app-search>
    <div class="container-fluid padding">
      <div class="row">
        <app-results
          :result="search"
          v-show="searchView"
          @songAdded="addToPlaylist"
          @artistLookup="viewArtist"
        ></app-results>
        <app-playlist :playList="playList" v-show="searchView"></app-playlist>
      </div>

      <div class="row justify-content-center">
        <app-artist v-show="artistView" :artist="artist"></app-artist>
        <app-artistsearch
          v-show="artistView"
          :artist="artist"
          @songAdded="addToPlaylist"
        ></app-artistsearch>
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
import artistSearch from './components/artistSearch.vue';

export default {
  name: 'app',
  data() {
    return {
      search: null,
      playList: [],
      artistView: false,
      searchView: false,
      artist: null,
    };
  },
  components: {
    appHeader: header,
    appSearch: search,
    appResults: results,
    appArtist: artist,
    appPlaylist: playlist,
    appArtistsearch: artistSearch,
  },
  methods: {
    /**
     * Setting search data variable to the emitted value from search component
     *
     * @param {String} value the value returned from the search component
     */
    searched(value) {
      this.search = value;
      this.toggleSearch();
    },
    /**
     * Toggles the components for search view and artist view
     *
     */
    toggleSearch() {
      if (this.searchView === false) {
        this.searchView = !this.searchView;
        this.artistView = false;
      }
      this.$forceUpdate();
    },
    /**
     * Adding selected song from the search view to the playlist
     *
     * @param {String} song the value from the search view to be added to playlist
     */
    addToPlaylist(song) {
      this.playList.push(song);
    },
    /**
     * Setting artist variable to be passed to the artist view and toggling the views
     *
     * @param {String} value the value returned from the search component
     */
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
  margin-top: 70px;
}
</style>
