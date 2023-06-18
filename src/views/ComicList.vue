<template>
  <div>
    <p v-if="loading">
      <LoadingSpinner />
    </p>
    <p v-if="error">Error: {{ error }}</p>
    <ul v-if="data" class="card-list">
      <li v-for:="comic in data.data.results" :key="comic.id" class="card">
        <span class="badge">{{ comic.format }}</span>
        <img
          :src="getCharImg(comic.thumbnail.path, comic.thumbnail.extension)"
        />
        <div class="info">
          <h2 class="comic-title">{{ comic.series.name }}</h2>
          <div class="description">
            <p v-if="comic.description">{{ comic.description }}</p>
            <p v-else class="no-description">No description for this comic</p>
          </div>
          <hr />
          <h3>Authors:</h3>
          <ul v-if="comic.creators.items.length > 0" class="authors">
            <li v-for:="author in comic.creators.items">
              <p>{{ author.name }},</p>
            </li>
          </ul>
          <p class="no-author" v-else>No author info for this comic</p>
          <router-link
            :to="{
              name: 'AboutComic',
              params: { id: comic.id },
              query: {
                image: getCharImg(
                  comic.thumbnail.path,
                  comic.thumbnail.extension
                ),
                title: comic.title,
                description: comic.description,
                authors: comic.creators.items.map((item) => item.name),
              },
            }"
          >
            Learn More
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    LoadingSpinner,
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

<style scoped>
.card-list {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10px;
}
.card {
  position: relative;
  widows: 100%;
  padding: 10px;
  max-width: calc(100vw / 6);
  box-shadow: 0 0 1px 0px #e9e9e9;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > .badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f9d949;
    padding: 5px 20px;
    border: 2px solid #000;
    border-radius: 5px;
    color: #000;
    font-weight: 700;
  }

  > img {
    height: 300px;
    object-fit: fill;
    border-radius: 5px;
  }

  > .info {
    width: 100%;
    padding: 10px;
    > .comic-title {
      align-items: baseline;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > .description {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 5px;
      margin-bottom: 10px;
      color: #5d5d5d !important;

      > .no-description {
        color: #b0b0b0;
      }
    }
    > .authors {
      display: flex;
      align-items: baseline;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      gap: 0.5rem;
      margin-bottom: 10px;

      > li,
      p {
        padding-block: 5px;
        color: #333;
      }
    }
  }
}

.no-author {
  margin-bottom: 10px;
  align-items: baseline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b0b0b0;
}
</style>
