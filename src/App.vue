<template>
  <v-app>
    <v-main>
      <HeroVue />
      <PokemonList :pokemons="pokemons" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import RestApiService from "./services/RestApiService";
import PokemonList from "./components/PokemonList.vue";
import HeroVue from "./components/Hero.vue";

const pokemons = ref([]);

const params = {
  limit: 20,
  offset: 0,
};

const fetchPokemons = async () => {
  try {
    const data = await new RestApiService().getList(params);
    pokemons.value = data;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  fetchPokemons();
});
</script>

<style>
@import "./assets/styles/styles.css";
</style>
