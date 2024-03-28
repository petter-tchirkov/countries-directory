<script setup lang="ts">
const url = useRuntimeConfig().public.apiUrl
const { country } = useRoute().params
const countryData = ref<Country | null>(null)

await $fetch<Country>(`${url}/alpha/${country}?fullText=true?fields=name,population,cca3,borders`, {onResponse: ({response})=> countryData.value = response._data[0]})
</script>
<template>
    <div class="p-4">
    <NuxtLink to="/"><<< To Countries List</NuxtLink>
    <div class="flex flex-col gap-2 px-4 lg:px-40">
        <img :src="countryData.flags.svg" class="size-40" :alt="countryData.flags.alt"/>
            <h1 class="text-2xl font-bold" :class="{lowercase : countryData.cca3 === 'RUS'}">Country: {{countryData.name.official}}</h1>
        <p>Population: {{countryData.population}}</p>
        <p>CCA3 Code: {{countryData.cca3}}</p>
        <p>{{countryData.name.common}} on <NuxtLink class="text-blue-500 underline" target="_blank" :to="countryData.maps.googleMaps">Map</NuxtLink></p>
        <div>
            Borders:
            <ul v-if="countryData.borders">
                <li class="text-blue-500 underline" v-for="border in countryData.borders" :key="border">
                    <router-link :to="`/${border}`">{{border}}</router-link>
                </li>
            </ul>
            <p v-else>{{countryData.name.official}} has no neighbours (maybe it's an island)</p>
        </div>
    </div>

    </div>
</template>
