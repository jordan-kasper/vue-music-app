<template>
  <div>
    <div class="col-md-12 text-center padding-artist">
      <h4>Artist Info</h4>
      <br>
      <img class="rounded-circle" :src="artistInfo.picture_medium" />
      <br>
      <br>
      <br>
      <div class="text-left padding-text">
        <h4>{{ artistInfo.name }}</h4>
        <br>
        <p><a :href=artistInfo.tracklist>{{ artistInfo.name}} Top 50 Songs</a></p>
        <p>Number of Albums : {{ artistInfo.nb_album }}</p>
        <p>Found on the Radio : {{ artistInfo.radio }}</p>
        <p><a :href="artistInfo.share">Share Artist</a></p>
      </div>
    </div>
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
    /**
     * Axios API call to search for specific artist based off of ID
     *
     */
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
  },
};
</script>

<style scoped>
.padding-artist {
  margin-right: 70px;
}
.padding-text {
    margin-left: 80px;
}
</style>
