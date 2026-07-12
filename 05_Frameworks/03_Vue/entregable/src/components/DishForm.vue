<script setup lang="ts">
import { weekDays } from '@/common/constants';
import { useMealStore } from '@/stores/meals';
import type { Meal } from '@/types';
import { ref, watch } from 'vue';

const props = defineProps<{
  meal: Meal
}>()

const days = weekDays;
const meal = ref(props.meal);
const mealStore = useMealStore();

let isEditing: boolean = false;

/* watchEffect(() => {
  meal.value = props.meal;
  isEditing = true;
}); */

watch(props, () => {
  meal.value = props.meal;
  isEditing = true;
});

function AddMeal() {
  mealStore.addDish(meal.value.name, meal.value.weekDay, meal.value.dinner);

  cleanInputs();
}

function UpdateMeal(id: number) {
  mealStore.updateDish(id, meal.value.name, meal.value.weekDay, meal.value.dinner);
}

function cleanInputs() {
  meal.value.name = "";
  meal.value.weekDay = "Dia de la semana";
  meal.value.dinner = false;
}
</script>

<template>
  <h2 class="text-indigo-500 text-3xl font-black w-sm">
    Plato
    principal</h2>
  <div class="flex flex-wrap flex-row justify-start items-center gap-10 h-30">

    <div>
      <label for="meal.name" class="p-2">Nombre comida</label>
      <input id="meal.name" type="text" class="bg-gray-200 w-md text-black" placeholder="e.g. Macarrones con tomate"
        v-model="meal.name">
    </div>
    <div>
      <label for="day" class="p-2">Día</label>
      <select class="select  appearance-none text-black bg-gray-200 w-35" aria-label="select" v-model="meal.weekDay">
        <option disabled>Dia de la semana</option>
        <option v-for="(day, index) in days" :key="index">{{ day }}</option>
      </select>
    </div>
    <div class="flex justify-center">
      <label for="switch-component-on" class="text-sm cursor-pointer">Comida</label>

      <div class="relative inline-block w-11 h-5">
        <input id="switch-component-on" type="checkbox" v-model="meal.dinner"
          class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-500 cursor-pointer transition-colors duration-300" />
        <label for="switch-component-on"
          class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
        </label>
      </div>

      <label for="switch-component-on" class="text-sm cursor-pointer">Cena</label>
    </div>
    <div>
      <button v-if="!isEditing" class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="AddMeal">Agregar</button>
      <button v-if="isEditing" class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="UpdateMeal(meal.id)">Guardar</button>
    </div>
  </div>
</template>
