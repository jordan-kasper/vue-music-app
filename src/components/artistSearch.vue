<template>
      <div class="col-md-8 text-left">
        <h4 class="">Artist Songs</h4>
        <br>
        <table class="table">
          <thead>
            <tr class="text-left">
              <th scope="col">Song Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Play</th>
              <th scope="col">Stop</th>

            </tr>
          </thead>
          <tbody v-for="song in artistSongs" v-bind:key="song.id">
            <tr class="text-left">
              <td @click="addToPlaylist(song)">{{song.title}}</td>
              <td @click="toggleArtist(song.artist.id)">{{song.artist.name}}</td>
              <td>{{song.album.title}}</td>
          <td @click="playAudio(song.preview)">
            <button type="button" class="btn btn-outline-secondary">
              <b-icon
                icon="play-fill"
                style="width: 30px;
          height: 30px;"
                variant="info"
              ></b-icon>
            </button>
          </td>
          <td @click="stopAudio()">
            <button type="button" class="btn btn-outline-secondary">
              <b-icon
                icon="stop-fill"
                style="width: 30px; height: 30px;"
                variant="info"
              ></b-icon>
            </button>
          </td>

            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
import axios from 'axios';
import { BIcon } from 'bootstrap-vue';

export default {
  name: 'artistView',
  props: ['artist'],

  data() {
    return {
      artistSongs: null,
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
        this.artistSongs = response.data.data;
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
      if (this.playingSong === null) {
        this.playingSong = new Audio(url);
        this.playingSong.play();
      } else {
        this.stopAudio();
        this.playingSong = new Audio(url);
        this.playingSong.play();
      }
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
    artistSongs: {
      handler() {
        localStorage.setItem('artistSongs', JSON.stringify(this.artistSongs));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem('artistSongs')) {
      this.artistSongs = JSON.parse(localStorage.getItem('artistSongs'));
    }
  },
  components: {
    BIcon,
  },
};
</script>

<style scoped>

</style>
