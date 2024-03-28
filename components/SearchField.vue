<script setup lang="ts">
const url = useRuntimeConfig().public.apiUrl;
const { countries } = storeToRefs(useCountriesStore());
const error = ref("");

const searchQuery = ref("");
const searchCountries = async (searchQuery: string) => {
    await $fetch(
        `${url}/name/${searchQuery}?fields=name,population,cca3,flags`,
        {
            params: {
                name: searchQuery.value,
            },
            onResponse({ response }) {
                switch (response.status) {
                    case 404:
                        error.value = "Country not found";
                        break;
                    case 200:
                        countries.value = response._data;
                }
            },
        },
    );
};
</script>
<template>
    <div class="mb-4 lg:w-fit">
        <div class="flex gap-2">
            <input v-model="searchQuery" type="text" class="border border-blue-200 rounded-xl text-2xl w-full p-2"
                placeholder="Search for a country..." />
            <button class="bg-blue-500 text-white rounded-xl px-4 py-1" @click="searchCountries(searchQuery)">
                Search
            </button>
        </div>
        <small v-if="error.length" class="text-red-500">{{ error }}</small>
    </div>
</template>
