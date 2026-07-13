<script setup lang="ts">
import { useMealStore } from '@/stores/meals';
import type { Meal } from '@/types';

const mealStore = useMealStore();

const favoriteMeals: Meal[] = mealStore.getFavorites();
</script>

<template>
    <h2 class="text-indigo-500 text-2xl font-black w-xs">Platos favoritos</h2>

    <div class="flex flex-wrap flex-column justify-start items-center gap-10">
        <div v-for="(meal) in favoriteMeals" :key="meal.id">

            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ meal.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>