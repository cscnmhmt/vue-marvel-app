<template>
  <div>
    <HeaderMarvel />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderMarvel from '@/components/HeaderMarvel.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderMarvel,
  },
});
</script>

<style></style>
