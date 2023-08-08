<template>
  <span>
    <header
      class="bg-white dark:bg-black sticky top-0 z-50 flex space-x-1 p-4 shadow-md">
      <div
        class="container mx-auto xs:max-w-xl sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-6xl flex justify-between">
        <NuxtLink to="/" class="darquba text-5xl">DarQba</NuxtLink>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark" />
      </div>
    </header>
  </span>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
