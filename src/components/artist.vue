<template>
  <div>
    <div class="col-md-8 order-md-2 text-right">
      <app-results :result="artistInfo.name"></app-results>
    </div>
    <div class="col-md-2 order-md-1 mb-4 text-left">
      <h4>Artist Info</h4>
      <img :src="artistInfo.picture_medium" />
      <h4>{{ artistInfo.name }}</h4>
      <p>{{ artistInfo.tracklist }}</p>
      <p>Number of Albums : {{ artistInfo.nb_album }}</p>
      <p>Found on the Radio : {{ artistInfo.radio }}</p>
      <a :href="artistInfo.share">Share Artist</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import results from './results.vue';

export default {
  props: ['artist'],

  data() {
    return {
      artistInfo: {},
    };
  },

  methods: {
    artistQuery() {
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
        this.artistQuery();
      },
      deep: true,
      immediate: true,
    },
  },
  components: {
    appResults: results,
  },
};
</script>

<style scoped></style>
