<script setup lang="ts">
defineProps<{
  nom: string;
  imageSrc: string;
}>();
</script>

<template>
  <div
    class="relative group w-48 h-48 overflow-hidden rounded-lg cursor-pointer"
  >
    <img :src="imageSrc" :alt="nom" class="object-cover w-full h-full" />
    <div
      class="absolute bottom-0 left-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
    >
      {{ nom }}
    </div>
  </div>
</template>
