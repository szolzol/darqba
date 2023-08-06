<template>
  <div class="m-4 p-4 dark:bg-zirc-100">
    <div class="text-center pb-10 pt-5 md:max-w-xl md:mx-auto">
      <!-- <h1 class="text-3xl mb-3 mt-2 font-semibold tracking-normal text-white dark:text-black">
                Feladványok
            </h1> -->
      <h2 class="text-md font-primary font-black text-black dark:text-black">
        Minden feladványnál szükségetek lesz egy játékmesterre, a megoldást csak
        ő olvashatja el. A többiek ezután olyan kérdéseket tesznek fel neki,
        amelyekre IGEN-nel vagy NEM-mel tud a játékmester válaszolni. Ha eleinte
        a sötétben is tapogatóztok, jó logikával lépésről-lépésre eljuthattok a
        megoldásig.
        <br />
        <br />
        Amikor a játékmester úgy dönt, hogy valaki rájött a történet nyitjára,
        felolvassa a többieknek a megfejtést, felfedve a rejtély teljes
        megoldását.
      </h2>
    </div>

    <div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <!-- <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost /> -->
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import getPosts from "@/composables/getPosts";

// component imports
import PostList from "@/components/PostList.vue";
// import Spinner from '../components/Spinner.vue'

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, count, load } = getPosts();

    load();

    return { posts, error, count };
    console.log(posts);
  },
};
</script>
