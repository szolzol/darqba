<template>
  <div>
    <div
      class="mx-auto md:max-w-3xl lg:max-w-3xl xl:max-w-6xl grid grow-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center"
      v-if="posts.length">
      <div class="" v-for="post in posts" :key="post.id">
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
