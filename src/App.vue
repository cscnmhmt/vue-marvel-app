<template>
  <div>
    <HeaderMarvel />
    <router-view></router-view>
    <p v-if="loading">
      <!-- loading component -->
      Loading...
    </p>
    <p v-if="error">Error: {{ error }}</p>
    <ul v-if="data">
      <li v-for:="comic in data.data.results" class="card">
        <span class="badge">{{ comic.format }}</span>
        <img
          :src="getCharImg(comic.thumbnail.path, comic.thumbnail.extension)"
        />
        <div class="info">
          <h2>{{ comic.series.name }}</h2>
          <p>{{ comic.description }}</p>
          <ul>
            <h3>Creators</h3>
            <li v-for:="author in comic.creators.items">
              <p>{{ author.name }}</p>
            </li>
          </ul>
          <a href="#">Learn more</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderMarvel from '@/components/HeaderMarvel.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    HeaderMarvel,
  },
  methods: {
    getCharImg(path, extension) {
      return `${path}.${extension}`;
    },
  },
  mounted() {
    this.$store.dispatch('comicsData/fetchData');
  },
  computed: {
    ...mapState('comicsData', ['data', 'loading', 'error']),
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
  position: relative;
  /* width: 300px; */
  height: auto;
  padding: 0;
  gap: 0;
}
h2 {
  margin-bottom: 20px;
  color: #3c486b;
}

.badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #f9d949;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #000;
  color: #000;
  font-weight: 700;
}

img {
  /* max-width: 300px; */
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
