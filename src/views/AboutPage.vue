<template>
  <div>
    <p>{{ info }}</p>
    <router-link to="/">back to home</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const info = 'I am a frontend developer';

    return {
      info,
    };
  },
});
</script>

<style lang="scss" scoped></style>
