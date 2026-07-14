<script setup lang="ts">
import { useMealStore } from '@/stores/meals';
import type { Meal } from '@/types';

const mealStore = useMealStore();

const favoriteMeals: Meal[] = mealStore.getFavorites();
</script>

<template>
    <div class="flex flex-wrap flex-column items-center h-full">
        <div class="w-full ">
            <h2 class="text-indigo-500 text-2xl font-black">Platos favoritos</h2>
        </div>
        <div id="favoritos" class="flex flex-wrap flex-column gap-10 w-full h-[80%]">
            <div v-for="(meal) in favoriteMeals" :key="meal.id"
                class="flex flex-wrap flex-row justify-start h-20 gap-10">
                <div class="max-w-sm h-20 rounded overflow-hidden shadow-lg bg-gray-600">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ meal.name }}</div>
                    </div>
                </div>

            </div>
        </div>
        <!-- <h2 class="text-indigo-500 text-2xl font-black w-xs">Platos favoritos</h2>
        <div v-for="(meal) in favoriteMeals" :key="meal.id" class="flex flex-wrap flex-row justify-start  gap-10">

            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ meal.name }}</div>
                </div>
            </div>

        </div> -->
    </div>
</template>