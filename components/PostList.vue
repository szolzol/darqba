<template>
  <div>
    <div v-if="posts.length">
      <div
        v-for="post in posts"
        :key="post.id"
        class="md:mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        <SinglePost :post="post" />
      </div>
    </div>
    <div class="errortext" v-else>Nincsenek feladványok ilyen taggel...</div>
  </div>
</template>

<script>
// component imports
// import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  // components: { SinglePost },
  // setup() {},
};
</script>

<style scoped></style>
