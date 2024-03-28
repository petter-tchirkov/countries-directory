<script setup lang="ts">
const { countries } = storeToRefs(useCountriesStore())
const url = useRuntimeConfig().public.apiUrl

const { pending } = await useFetch<Country[]>(`${url}/all?fields=name,population,cca3,flags`, {
  lazy: true,
  onResponse: ({ response }) => {
    countries.value = response._data
  }
});
</script>
<template>
  <div>
    <PreLoader v-if="pending" />
    <ul v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <CountryCard v-for="country in countries" :key="country.cca3" :country="country" />
    </ul>
  </div>
</template>
