<script setup>
import VTask from './VTask.vue';
defineProps({title: {type: String, required: true},
tasks: {type: Array, required: true}
})
</script>

<template>
<div class="main__column">
    <div class="column__title">
        <p>{{ title }}</p>
    </div>
    <div class="cards">
        <VTask v-for="(task, index) in tasks" :key="index" v-bind="task" :index="index" />
    </div>
    
</div>
</template>
