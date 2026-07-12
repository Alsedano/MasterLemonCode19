<script setup lang="ts">
import DishForm from '@/components/DishForm.vue';
import WeekView from '@/components/WeekView.vue';
import { useMealStore } from '@/stores/meals';
import { createEmptyMeal } from '@/types';
import { ref } from 'vue';

const meal = ref(createEmptyMeal(false));

const mealStore = useMealStore();

function onEditMeal(id: number) {
    meal.value = mealStore.getMeal(id);
}
</script>

<template>
    <div class="columnLayout bodyLayout">
        <DishForm :meal="meal"></DishForm>
        <WeekView @editMeal="onEditMeal"></WeekView>
    </div>
</template>

<style scoped>
.bodyLayout {
    height: 100%;
}
</style>