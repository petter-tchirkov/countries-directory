import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", () => {
  const countries = ref<Country[]>([]);

  return { countries };
});
