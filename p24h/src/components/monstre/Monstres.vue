<script setup lang="ts">
import { monstres } from "../../model/monstres";
import Monstre from "./Monstre.vue";

const listeMonstres = monstres;
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
    <Monstre
      v-for="monstre in listeMonstres"
      :key="monstre.id"
      :nom="monstre.nom"
      :imageSrc="monstre.image"
    />
  </div>
</template>
