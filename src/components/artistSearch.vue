<template>
      <div class="col-md-8 text-left">
        <h4 class="">Artist Songs</h4>
        <br>
        <table class="table">
          <thead>
            <tr class="text-left">
              <th scope="col"> </th>
              <th scope="col">Song Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Play</th>
              <th scope="col">Stop</th>

            </tr>
          </thead>
          <tbody v-for="song in songs" v-bind:key="song.id">
            <tr class="text-left">
              <td> O </td>
              <td @click="addToPlaylist(song)">{{song.title}}</td>
              <td @click="toggleArtist(song.artist.id)">{{song.artist.name}}</td>
              <td>{{song.album.title}}</td>
              <td @click="playAudio(song.preview)">Play</td>
              <td @click="stopAudio()">Stop</td>

            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'artistView',
  props: ['artist'],

  data() {
    return {
      songs: null,
      playingSong: null,
      playList: [],
    };
  },
  methods: {
    /**
     * Axios API call to search deezer songs baised on artist
     *
     */
    searchQuery() {
      axios({
        method: 'GET',
        // eslint-disable-next-line prefer-template
        url: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + this.artist + '/top?limit=50',
      }).then((response) => {
        this.songs = response.data.data;
      });
    },
    /**
     * Adding a song to the playlist
     *
     * @param {String} song the value from the search results
     */
    addToPlaylist(song) {
      this.$emit('songAdded', (song));
    },
    playAudio(url) {
      this.playingSong = new Audio(url);
      this.playingSong.play();
    },
    stopAudio() {
      this.playingSong.pause();
    },
  },
  watch: {
    $props: {
      handler() {
        this.searchQuery(this.result);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>

</style>
