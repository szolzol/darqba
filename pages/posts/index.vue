<template>
  <div class="p-4">
    <div
      class="mx-auto text-center pb-10 pt-5 sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-6xl">
      <!-- <h3 class="text-3xl mb-3 mt-2 font-semibold tracking-normal">
        Szabályok
      </h3> -->
      <h2 class="p-2 text-justify">
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
