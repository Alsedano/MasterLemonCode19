<script setup lang="ts">
import { useMealStore } from '@/stores/meals';
import type { Meal } from '@/types';
import FilterMeal from './FilterMeal.vue';
import { ref } from 'vue';

const mealStore = useMealStore();

const filterName = ref("");
const filterDay = ref("");
const filterCategory = ref("");

function filterByName(newName: string) {
    filterName.value = newName;
}

function filterByDay(newDay: string) {
    filterDay.value = newDay;
}

function filterByCategory(category: string) {
    filterCategory.value = category;
}

function mealsFiltered() {
    let favoriteMeals: Meal[] = mealStore.getFavorites();

    if (filterName.value) {
        favoriteMeals = favoriteMeals.filter(m => m.name.includes(filterName.value))
    }
    if (filterDay.value) {
        favoriteMeals = favoriteMeals.filter(m => m.weekDay === filterDay.value)
    }
    if (filterCategory.value) {
        const dinner = filterCategory.value === "Cena" ? true : false;
        favoriteMeals = favoriteMeals.filter(m => m.dinner === dinner);
    }
    return favoriteMeals;
}
</script>

<template>
    <div class="flex flex-wrap flex-column h-full">
        <div class="flex flex-row justify-between items-center w-full h-[20%]">
            <div>
                <h2 class="text-indigo-500 text-2xl font-black w-xs">Plan semanal</h2>
            </div>
            <FilterMeal @filter-by-day="filterByDay" @filter-by-name="filterByName"
                @filter-by-category="filterByCategory"></FilterMeal>
        </div>
        <div class="flex flex-wrap flex-row justify-start gap-10 mt-5 h-[80%]">
            <div v-for="(meal) in mealsFiltered()" :key="meal.id"
                class="flex flex-wrap flex-row justify-start h-20 gap-10">
                <div class="max-w-sm h-20 rounded overflow-hidden shadow-lg bg-gray-600">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ meal.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>