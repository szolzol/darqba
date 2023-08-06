<template>
  <div
    class="relative py-8 max-w-sm p-6 h-96 sm:w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-300 dark:border-gray-700">
    <h5
      class="whitespace-normal font-primary font-black mb-2 text-2xl tracking-tight text-red-800 dark:text-red-800">
      {{ post.title }}
    </h5>
    <p class="mb-3 text-black dark:text-black">{{ snippet }}</p>
    <div class="absolute bottom-3 text-red-800 hover:text-red-600">
      <NuxtLink class="text-red-800" :to="`/posts/${post.id}`">
        <Icon
          name="fa6-solid:skull"
          class="font-primary font-black mb-2 text-4xl tracking-tight text-red-800 hover:text-red-600 dark:text-red-800" />

        Megfejtjük...
      </NuxtLink>
    </div>
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
