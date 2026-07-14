<script setup lang="ts">
import FooterItem from '@/components/FooterItem.vue';
import HeaderItem from '@/components/HeaderItem.vue';
</script>

<template>
    <div class="grid h-screen grid-cols-1 grid-rows-[50px_1fr_50px]">
        <HeaderItem></HeaderItem>
        <RouterView />
        <FooterItem></FooterItem>
    </div>
</template>