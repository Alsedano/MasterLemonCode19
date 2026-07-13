<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

function goToPlanSemanal() {
  router.push('/planner')
}

function goToPlatosFavoritos() {
  router.push('/favorites')
}
</script>

<template>
  <div class="flex flex-row justify-between items-center">
    <div>
      <h1
        class="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-teal-500 to-teal-200 text-3xl font-black w-sm">
        Meal Planner</h1>
    </div>
    <div class="flex flex-row gap-5">
      <button class="border-2 border-indigo-500" @click="goToPlanSemanal">Plan semanal</button>
      <button class="border-2 border-indigo-500" @click="goToPlatosFavoritos">Platos favoritos</button>
    </div>
  </div>
</template>
