<template>
  <div class="">
    <div class="errortext" v-if="error">{{ error }}</div>
    <div
      v-if="post"
      class="mx-auto md:max-w-3xl lg:max-w-3xl grid grow-0 grid-cols-1 justify-items-left p-4">
      <h1
        class="my-4 whitespace-normal font-primary font-black text-2xl tracking-tight text-red-800 dark:text-red-500">
        {{ post.title }}
      </h1>
      <!-- <div class="storyIcon">
        <font-awesome-icon :icon="post.storyIcon" size="6x" />
      </div> -->
      <p class="my-4">{{ post.body }}</p>
      <p class="my-4 text-justify font-semibold">{{ post.answer }}</p>
      <!-- <button @click="handleClick" class="delete">Feladvány törlése</button> -->

      <!-- <div v-else>
      <Spinner />
    </div> -->
      <NuxtLink class="my-4" to="/posts"
        ><UButton class="font-extrabold" color="red" variant="solid" size="xl"
          >Megfejtettük!!</UButton
        ></NuxtLink
      >
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import { useRoute, useRouter } from "vue-router";
// import { doc, deleteDoc } from "firebase/firestore";
// import { db } from '../firebase/config'
import Spinner from "@/components/Spinner.vue";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    // const router = useRouter();
    const { error, post, load } = getPost(route.params.id);

    load();

    // const handleClick = async () => {
    //   await deleteDoc(doc(db, "posts", props.id));
    //   router.push('/')
    // }
    return {
      error,
      post,
      //   , handleClick
    };
  },
};
</script>
