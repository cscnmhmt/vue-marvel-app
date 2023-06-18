<template>
  <div class="about-page">
    <router-link to="/"> {{ '<' }} Back</router-link>
    <hr />
    <section>
      <img :src="image" v-if="image" alt="Comic Image" />
      <div class="detail">
        <h1>{{ $route.query.title }}</h1>
        <p v-if="$route.query.description">
          Description: {{ $route.query.description }}
        </p>
        <p v-else>No description</p>
        <h3 v-if="authors.length">Authors:</h3>
        <ul v-if="authors.length">
          <li v-for="author in authors" :key="author">{{ author }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    authors() {
      if (this.$route.query.authors) {
        return Array.isArray(this.$route.query.authors)
          ? this.$route.query.authors
          : [this.$route.query.authors];
      }
      return [];
    },
    image() {
      return this.$route.query.image;
    },
  },
};
</script>

<style scoped>
.about-page {
  position: relative;
  margin: 10px;
  margin-top: 60px;
  padding: 10px;
}
a {
  position: absolute;
  top: -45px;
  left: 10px;
  width: 150px;
  background-color: #000;
  &:hover {
    background-color: #000;
  }
}
img {
  max-width: 300px;
}
section {
  display: flex;
  gap: 2rem;
  margin-top: 15px;
}
.detail {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    color: #f45050;
    text-transform: uppercase;
    font-size: 3em;
  }

  > p {
    color: #787878;
    font-size: 1.2em;
    line-height: 1.4em;
  }

  > h3 {
    font-size: 1.8em;
    text-transform: uppercase;
  }

  > ul {
    display: flex;
    gap: 20px;

    > li {
      padding: 10px;
      box-shadow: 0 0 1px 0px #e9e9e9;
      border: 1px solid #e8e8e8;
      border-radius: 10px;
      font-size: 1.2em;
    }
  }
}
</style>
