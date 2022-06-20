<template>
  <v-card class="mx-auto" width="400">
    <v-container class="text-center">
      <v-img :src="pokemonDetails.sprite" cover></v-img>
      <v-card-title class="mx-auto">
        {{ pokemonDetails.name }}
      </v-card-title>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { Pokemon, PokemonDetails } from "../types/Pokemon";
import { onMounted, reactive } from "vue";
import RestApiService from "../services/RestApiService";

interface Props {
  pokemon: Pokemon;
}

const props = defineProps<Props>();
const pokemonDetails: PokemonDetails = reactive({
  id: 0,
  name: "",
  height: 0,
  weight: 0,
  sprite: "",
});

// methods
const fetchPokemonDetails = async () => {
  try {
    const data = await new RestApiService().getPokemon(props.pokemon);
    Object.assign(pokemonDetails, data);
  } catch (e) {
    console.log(e);
  }
};

// lifecycle hooks
onMounted(() => {
  fetchPokemonDetails();
});
</script>
