<template>
  <section id="pokemon-list">
    <v-row justify="center">
      <v-col cols="2">
        <v-text-field />
      </v-col>
    </v-row>
    <v-row class="ma-10">
      <v-col v-for="pokemon in pokemons" class="d-flex child-flex" cols="4">
        <PokemonCard :pokemon="pokemon" />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard.vue";

interface Props {
  pokemons: Pokemon[];
}
const props = defineProps<Props>();
</script>
