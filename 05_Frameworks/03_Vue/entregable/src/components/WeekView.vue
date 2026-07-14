<script setup lang="ts">
import { weekDays } from '@/common/constants';
import { useMealStore } from '@/stores/meals';
import FilterMeal from './FilterMeal.vue';
import { ref } from 'vue';
import type { Meal } from '@/types/index.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emits = defineEmits(['editMeal']);

const days = weekDays;
const filterName = ref("");
const filterDay = ref("");

const mealStore = useMealStore();

function getLunchMealByDay(day: string) {
    let lunchMeals = mealStore.getLunchMealsForDay(day);
    lunchMeals = applyFilters(lunchMeals);
    return lunchMeals;
}

function getDinnerMealByDay(day: string) {
    let dinnerMeals = mealStore.getDinnerMealsForDay(day);
    dinnerMeals = applyFilters(dinnerMeals);
    return dinnerMeals;
}

function applyFilters(meals: Meal[]) {
    if (filterName.value) {
        meals = meals.filter(m => m.name.includes(filterName.value))
    }
    if (filterDay.value) {
        meals = meals.filter(m => m.weekDay === filterDay.value)
    }
    return meals;
}

function deleteMeal(id: number) {
    if (confirm('¿Estas seguro de eliminar esta comida?')) {
        mealStore.deleteMeal(id);
    }
}

function favoriteMeal(id: number) {
    mealStore.handleFavorite(id);
}

function LimpiarPlanSemanal() {
    if (confirm('¿Estas seguro de limpiar la lista de platos?')) {
        mealStore.clearAllItems();
    }
}

function filterByName(newName: string) {
    filterName.value = newName;
}

function filterByDay(newDay: string) {
    filterDay.value = newDay;
}

function isFilteredDay(day: string): boolean {
    return filterDay.value ? day === filterDay.value : true
}
</script>

<template>
    <div class="flex flex-row justify-between items-center w-full">
        <div>
            <h2 class="text-indigo-500 text-2xl font-black w-xs">Plan semanal</h2>
        </div>
        <FilterMeal @filter-by-day="filterByDay" @filter-by-name="filterByName"></FilterMeal>
    </div>
    <div class="flex flex-wrap flex-row justify-start gap-10 mt-5 w-full">
        <div v-for="(day, index) in days" :key="index">

            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600" v-if="isFilteredDay(day)">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ day }}</div>
                    <div class="font-bold text-xl mb-2">Comida</div>
                    <div v-for="(meal) in getLunchMealByDay(day)" :key="meal.id"
                        class="flex flex-wrap flex-row justify-start gap-1">
                        <p>{{ meal.name }}</p>
                        <button @click="$emit('editMeal', meal.id)" aria-label="Editar comida">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                                        fill="#615fff"></path>
                                </g>
                            </svg>
                        </button>
                        <button @click="deleteMeal(meal.id)" aria-label="Eliminar comida">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#615fff" viewBox="0 0 24 24" class="w-6 h-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </g>
                            </svg>
                        </button>
                        <button @click="favoriteMeal(meal.id)" aria-label="Comida favorita">
                            <svg v-if="!meal.favorite" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                        fill="#615fff" stroke="#615fff" stroke-width="2"></path>
                                </g>
                            </svg>
                            <svg v-if="meal.favorite" viewBox="0 0 24 24" class="w-6 h-6" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#ff00bb">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                        fill="#ff00bb" stroke="#ff00bb" stroke-width="2"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <p v-if="getLunchMealByDay(day).length === 0">No hay comidas</p>
                    <hr>

                    <div class="font-bold text-xl mb-2">Cena</div>

                    <div v-for="(meal) in getDinnerMealByDay(day)" :key="meal.id"
                        class="flex flex-wrap flex-row justify-start items-center gap-1">
                        <p>{{ meal.name }}</p>
                        <button @click="$emit('editMeal', meal.id)" aria-label="Editar comida">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                                        fill="#615fff"></path>
                                </g>
                            </svg>
                        </button>
                        <button @click="deleteMeal(meal.id)" aria-label="Eliminar comida">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#615fff" viewBox="0 0 24 24" class="w-6 h-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </g>
                            </svg>
                        </button>
                        <button @click="favoriteMeal(meal.id)" aria-label="Comida favorita">
                            <svg v-if="!meal.favorite" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                        fill="#615fff" stroke="#615fff" stroke-width="2"></path>
                                </g>
                            </svg>
                            <svg v-if="meal.favorite" viewBox="0 0 24 24" class="w-6 h-6" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#ff00bb">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                        fill="#ff00bb" stroke="#ff00bb" stroke-width="2"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <p v-if="getDinnerMealByDay(day).length === 0">No hay comidas</p>
                </div>
            </div>
        </div>

    </div>
    <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-50 h-10 mt-10"
        @click="LimpiarPlanSemanal">Limpiar</button>
</template>