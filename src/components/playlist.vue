<template>
  <div class="col-md-4">
    <h4 class="d-flex justify-content-between align-items-center">
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
          <td name="delete" @click="deleteSong(song)">
            <b-icon icon="x-circle" scale="2" variant="danger"> </b-icon>
          </td>
          <td>{{ song.title }}</td>
          <td>{{ song.artist.name }}</td>
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
import { BIcon } from 'bootstrap-vue';

export default {
  name: 'playlist',
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
  components: {
    BIcon,
  },
};
</script>

<style scoped></style>
