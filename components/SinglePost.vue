<template>
  <div
    class="relative py-8 max-w-sm p-6 h-96 sm:w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-900">
    <h5
      class="whitespace-normal font-primary font-black mb-2 text-2xl tracking-tight text-red-800 dark:text-red-500">
      {{ post.title }}
    </h5>
    <p class="mb-3">{{ snippet }}</p>
    <NuxtLink :to="`/posts/${post.id}`">
      <div
        class="absolute bottom-3 w-10/12 ml-1 rounded-lg text-red-800 dark:text-red-500 hover:text-red-600 dark:hover:bg-red-300 hover:bg-red-200 border-4 border-red-800 dark:border-red-500">
        <Icon
          name="fa6-solid:skull"
          class="font-primary font-black mb-2 text-4xl tracking-tight mx-4 mt-2" />

        Megoldás
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 200) + "...";
    });

    return { snippet };
  },
};
</script>
