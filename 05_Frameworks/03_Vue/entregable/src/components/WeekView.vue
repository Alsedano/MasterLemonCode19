<script setup lang="ts">
import { weekDays } from '@/common/constants';

const days = weekDays;
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
                    <hr>
                    <div class="font-bold text-xl mb-2">Cena</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                        perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>