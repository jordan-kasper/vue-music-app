<template>
  <div class="padding">
    <ul v-for="song in songs" v-bind:key="song.id">
      <li>
        <span>{{ song.title }}</span> <span>{{ song.artist.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['result'],

  data() {
    return {
      songs: null,
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
.padding {
  margin-top: 100px;
}
</style>
