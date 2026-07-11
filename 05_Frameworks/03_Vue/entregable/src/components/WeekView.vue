<script setup lang="ts">
import { weekDays } from '@/common/constants';
import { useMealStore } from '@/stores/meals';

const days = weekDays;

const mealStore = useMealStore();

function getLunchMealByDay(day: string) {
    return mealStore.getLunchMealsForDay(day).map(m => m.name);
}

function getDinnerMealByDay(day: string) {
    return mealStore.getDinnerMealsForDay(day).map(m => m.name);
}


/*
const previewText = computed(() => {
  const totalCount = items.value.length;

  if (totalCount === 0) {
    return "Empty list";
  }
*/
</script>

<template>
    <div>
        <p>Week View</p>
    </div>
    <div class="flex flex-wrap flex-row justify-start items-center gap-10">
        <div v-for="(day, index) in days" :key="index">

            <div class="max-w-2xs rounded overflow-hidden shadow-lg bg-gray-600">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ day }}</div>
                    <div class="font-bold text-xl mb-2">Comida</div>
                    <p v-for="(meal, index) in getLunchMealByDay(day)" :key="index">{{ meal }}</p>
                    <hr>
                    <div class="font-bold text-xl mb-2">Cena</div>
                    <p v-for="(meal, index) in getDinnerMealByDay(day)" :key="index">{{ meal }}</p>
                </div>
            </div>
        </div>
    </div>
</template>