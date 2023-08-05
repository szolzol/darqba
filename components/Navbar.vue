<template>
    <span>
        <header
            class="bg-zinc-100 dark:bg-zinc-300 sticky top-0 z-50 flex justify-between items-center space-x-1 p-4 shadow-md ">
            <NuxtLink to="/" class="darquba text-5xl font-primary font-white dark:text-black">DarQba</NuxtLink>
            <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
                aria-label="Theme" @click="isDark = !isDark" />
        </header>
    </span>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<style scoped>
.darquba {
    font-weight: 900;
    background: linear-gradient(to right,
            #aa0000 20%,
            #000000 30%,
            #444 70%,
            #e73434 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 10s ease-in-out infinite alternate;
}

@keyframes textShine {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}
</style>