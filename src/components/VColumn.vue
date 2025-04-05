<script setup>
import VTask from './VTask.vue';
defineProps({title: {type: String, required: true}})
</script>

<template>
<div class="main__column">
    <div class="column__title">
        <p>{{ title }}</p>
    </div>
    <div class="cards">
        <VTask/>
        <VTask/>
        <VTask/>
    </div> 
</div>
</template>
