<template>
  <div class="col-md-8 order-md-1">
    <h4>Artist Info</h4>
    <img :src="artistInfo.picture_medium">
    <h4>{{artistInfo.name}}</h4>
    <p> {{artistInfo.tracklist}} </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['artist'],

  data() {
    return {
      artistInfo: {},
    };
  },

  methods: {
    searchQuery() {
      axios({
        method: 'GET',
        // eslint-disable-next-line prefer-template
        url: 'https://deezerdevs-deezer.p.rapidapi.com/artist/' + this.artist,
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': 'gfetYKeN6VyxYZCQbYCF4TLt88QQnSoc',
        },
        params: {
          q: 'test',
        },
      }).then((response) => {
        this.artistInfo = response.data;
      });
    },
  },

  watch: {
    $props: {
      handler() {
        this.searchQuery();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped></style>
