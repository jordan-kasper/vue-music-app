<template>
  <div class="col-md-4 order-md-2 mb-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span>Playlist</span>
    </h4>
    <table class="table">
      <thead>
        <tr class="text-left">
          <th scope="col"></th>
          <th scope="col">Song Name</th>
          <th scope="col">Artist</th>
          <th scope="col">Play</th>
          <th scope="col">Stop</th>
        </tr>
      </thead>
      <tbody v-for="song in playList" v-bind:key="song.id">
        <tr class="text-left">
          <td @click="deleteSong(song)">X</td>
          <td>{{ song.title }}</td>
          <td>{{ song.artist.name }}</td>
          <td @click="playAudio(song.preview)">Play</td>
          <td @click="stopAudio()">Stop</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['playList'],
  methods: {
    deleteSong(song) {
      const songIndex = this.playList.indexOf(song);
      this.playList.splice(songIndex, 1);
    },
    playAudio(url) {
      this.playingSong = new Audio(url);
      this.playingSong.play();
    },
    stopAudio() {
      this.playingSong.pause();
    },
  },
};
</script>

<style scoped></style>
