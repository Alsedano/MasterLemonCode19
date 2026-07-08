<script setup lang="ts">
import DishForm from '@/components/DishForm.vue';
import WeekView from '@/components/WeekView.vue';
</script>

<template>
    <div class="columnLayout bodyLayout">
        <DishForm></DishForm>
        <WeekView></WeekView>
    </div>
</template>

<style scoped>
.bodyLayout {
    height: 100%;
}
</style>