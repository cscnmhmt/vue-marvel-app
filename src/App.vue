<template>
  <div>
    <h1>Marvel App</h1>
    <router-view></router-view>
    <ul>
      <li v-for:="character in characters" class="card">
        <img
          :src="
            getCharImg(character.thumbnail.path, character.thumbnail.extension)
          "
        />
        <div class="info">
          <h2>{{ character.series.name }}</h2>
          <p>{{ character.description }}</p>
          <a href="#">Learn more</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import generateHash from './helpers/index';

export default defineComponent({
  name: 'App',
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    fetchCharacters() {
      const baseUrl = 'https://gateway.marvel.com/v1/public';
      const endpoint = '/comics';
      const apiKey = 'c18dbbd0f13a1087b3ffc0156f181bde';
      const privateKey = '8fc728b998737966a80b79be8e58bbf78eedf947';
      const timestamp = new Date().getTime().toString();
      const hash = generateHash(timestamp, privateKey, apiKey); // You need to implement this method

      const url = `${baseUrl}${endpoint}?apikey=${apiKey}&hash=${hash}&ts=${timestamp}`;

      axios
        .get(url)
        .then((response) => {
          this.characters = response.data.data.results;
        })
        .catch((error) => {
          console.error('Error fetching Marvel characters:', error);
        });
    },
    getCharImg(path, extension) {
      return `${path}.${extension}`;
    },
  },
});
</script>

<style>
ul {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  place-items: flex-end;
  gap: 20px;
}

.card {
  width: 300px;
  height: auto;
  padding: 0;
  gap: 0;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
  background-color: #f45050;
  padding-block: 20px;
}
h2 {
  margin-bottom: 20px;
  color: #3c486b;
}

img {
  max-width: 300px;
  padding: 5px;
  border-radius: 10px;
}

p {
  margin-bottom: 10px;
  color: #333 !important;
}

.info {
  width: 100%;
  text-align: center;
  padding: 20px;
}
</style>
