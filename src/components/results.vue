<template>
  <div class="col-md-8 text-left">
    <h4 class="">Search Results</h4>
    <table class="table">
      <thead>
        <tr class="text-left">
          <th scope="col"></th>
          <th scope="col">Song Name</th>
          <th scope="col">Artist</th>
          <th scope="col">Album</th>
          <th scope="col">Artist Info</th>
          <th scope="col">Play</th>
          <th scope="col">Stop</th>
        </tr>
      </thead>
      <tbody v-for="song in songsList" v-bind:key="song.id">
        <tr class="text-left">
          <td @click="addToPlaylist(song)">
              <b-icon
                icon="plus"
                style="width: 30px;
          height: 30px;"
                variant="info"
              ></b-icon>
          </td>
          <td>{{ song.title }}</td>
          <td id="artist">
            {{ song.artist.name }}
          </td>
          <td>{{ song.album.title }}</td>
          <td id="artist" @click="toggleArtist(song.artist.id)">
            <button type="button" class="btn btn-outline-secondary">
              <b-icon
                icon="info"
                style="width: 30px;
          height: 30px;"
                variant="info"
              ></b-icon>
            </button>
          </td>
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
  name: 'search',
  props: ['result'],

  data() {
    return {
      songsList: null,
      playingSong: null,
      playList: [],
      currentSort: 'name',
      currentSortDir: 'asc',
    };
  },
  methods: {
    /**
     * Axios API call to search deezer songs
     *
     * @param {String} results search topic from input field
     */
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
        this.songsList = response.data.data;
      });
    },
    /**
     * Adding a song to the playlist
     *
     * @param {String} song the value from the search results
     */
    addToPlaylist(song) {
      this.$emit('songAdded', song);
    },
    /**
     * toggling the artist and search view, passing artist back to app
     *
     * @param {String} artist the value from API response
     */
    toggleArtist(artist) {
      this.$emit('artistLookup', artist);
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
    },
    songsList: {
      handler() {
        localStorage.setItem('songsList', JSON.stringify(this.songsList));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem('songsList')) {
      this.songsList = JSON.parse(localStorage.getItem('songsList'));
    }
  },
  components: {
    BIcon,
  },
};
</script>

<style scoped></style>
