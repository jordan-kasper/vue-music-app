<template>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Search Results</h4>
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
  props: ['result'],

  data() {
    return {
      songs: null,
      playingSong: null,
      playList: [],
    };
  },
  methods: {
    searchQuery(result) {
      axios({
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': 'gfetYKeN6VyxYZCQbYCF4TLt88QQnSoc',
        },
        params: {
          q: result,
        },
      }).then((response) => {
        this.songs = response.data.data;
      });
    },
    addToPlaylist(song) {
      this.$emit('songAdded', (song));
    },
    toggleArtist(artist) {
      this.$emit('artistLookup', (artist));
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
