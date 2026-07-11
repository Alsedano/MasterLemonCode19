<script setup lang="ts">
import { weekDays } from '@/common/constants';
import { useMealStore } from '@/stores/meals';
import { ref } from 'vue';

const days = weekDays;
const dishName = ref("");
const weekDay = ref("Dia de la semana");
const isDinner = ref(false);
const mealStore = useMealStore();

function AddMeal() {
  mealStore.addDish(dishName.value, weekDay.value, isDinner.value);

  cleanInputs();
}

function cleanInputs() {
  dishName.value = "";
  weekDay.value = "Dia de la semana";
  isDinner.value = false;
}
</script>

<template>
  <h2 class="text-indigo-500 text-3xl font-black w-sm">
    Plato
    principal</h2>
  <div class="flex flex-wrap flex-row justify-start items-center gap-10 h-30">

    <div>
      <label for="dishName" class="p-2">Nombre comida</label>
      <input id="dishName" type="text" class="bg-gray-200 w-md text-black" placeholder="e.g. Macarrones con tomate"
        v-model="dishName">
    </div>
    <div>
      <label for="day" class="p-2">Día</label>
      <select class="select  appearance-none text-black bg-gray-200 w-35" aria-label="select" v-model="weekDay">
        <option disabled selected>Dia de la semana</option>
        <option v-for="(day, index) in days" :key="index">{{ day }}</option>
      </select>
    </div>
    <div class="flex justify-center">
      <label for="switch-component-on" class="text-sm cursor-pointer">Comida</label>

      <div class="relative inline-block w-11 h-5">
        <input id="switch-component-on" type="checkbox" v-model="isDinner"
          class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-500 cursor-pointer transition-colors duration-300" />
        <label for="switch-component-on"
          class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
        </label>
      </div>

      <label for="switch-component-on" class="text-sm cursor-pointer">Cena</label>
    </div>
    <div>
      <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="AddMeal">Añadir</button>
    </div>
  </div>
</template>
