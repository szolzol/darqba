<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
    <h5
      class="font-primary font-black mb-2 text-2xl tracking-tight text-red-800 dark:text-red-800">
      {{ post.title }}
    </h5>
    <p class="mb-3 text-black dark:text-black">{{ snippet }}</p>
    <NuxtLink
      class="inline-flex items-center text-blue-600 hover:underline"
      :to="`/posts/${post.id}`">
      Megfejtjük...
    </NuxtLink>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 150) + "...";
    });

    return { snippet };
  },
};
</script>
