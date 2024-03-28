<script setup lang="ts">
const { country } = defineProps<{ country: Country }>();
</script>
<template>
    <li class="flex items-center gap-4 p-4 border border-blue-200 rounded-xl cursor-pointer hover:bg-blue-50 transition bg-white"
        @click="$router.push(`/${country.cca3}`)">
        <img class="size-10" :src="country.flags.svg" alt="" />
        <div class="flex flex-col justify-center">
            <h2 :class="{ lowercase: country.cca3 === 'RUS' }">Name: {{ country.name.common }}</h2>
            <p>Population: {{ country.population }}</p>
            <p>CCA3: {{ country.cca3 }}</p>
        </div>
    </li>
</template>
