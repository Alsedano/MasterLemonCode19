<script setup lang="ts">
import DishForm from '@/components/DishForm.vue';
import WeekView from '@/components/WeekView.vue';
import { useMealStore } from '@/stores/meals';
import { createEmptyMeal } from '@/types';
import { ref } from 'vue';

const meal = ref(createEmptyMeal(false));

const mealStore = useMealStore();

function onEditMeal(id: number) {
    const mealFromStore = mealStore.getMeal(id);
    meal.value = { ...mealFromStore };
}
</script>

<template>
    <div class="flex flex-wrap flex-column h-full">
        <DishForm :mealProp="meal"></DishForm>
        <WeekView @editMeal="onEditMeal"></WeekView>
    </div>
</template>