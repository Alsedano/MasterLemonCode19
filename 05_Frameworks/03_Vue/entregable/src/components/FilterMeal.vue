<script setup lang="ts">
import { weekDays } from '@/common/constants';
import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(['filterByName', 'filterByDay']);

const name = ref("");
const day = ref("");
const days = weekDays;

const isFilteringByName = ref(false);
const isFilteringByDay = ref(false);

function filterByName() {
    isFilteringByName.value = !isFilteringByName.value;
    if (!isFilteringByName.value) emit('filterByName', "");
}

function filterByDay() {
    isFilteringByDay.value = !isFilteringByDay.value;
    if (!isFilteringByDay.value) emit('filterByDay', "");
}

function filter() {
    if (isFilteringByName.value) emit('filterByName', name.value);
    if (isFilteringByDay.value) emit('filterByDay', day.value);
}
</script>
<template>
    <div class="flex flex-column gap-2">
        <div>
            <button class="inline-flex items-center" @click="filterByName">
                <svg viewBox=" 0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z"
                            fill="#615fff"></path>
                    </g>
                </svg>
                Nombre
            </button>

            <button class="inline-flex items-center" @click="filterByDay">
                <svg viewBox=" 0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z"
                            fill="#615fff"></path>
                    </g>
                </svg>
                Dia
            </button>
        </div>

        <div v-if="isFilteringByName">
            <label for="name" class="p-2">Nombre</label>
            <input id="name" type="text" class="bg-gray-200 w-3xs text-black" placeholder="e.g. Macarrones con tomate"
                v-model="name">
        </div>

        <div v-if="isFilteringByDay">
            <label for="day" class="p-2">Dia</label>
            <select class="select  appearance-none text-black bg-gray-200 w-35" aria-label="select" v-model="day">
                <option disabled>Dia de la semana</option>
                <option v-for="(day, index) in days" :key="index">{{ day }}</option>
            </select>
        </div>

        <button v-if="isFilteringByName || isFilteringByDay"
            class="bg-indigo-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full"
            @click="filter">Filtrar</button>
    </div>
</template>