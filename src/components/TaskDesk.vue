<script setup>
import { computed, ref } from 'vue';
import VColumn from './VColumn.vue';
import { tasksMock } from '@/mocks/tasks';
const tasks = ref(tasksMock) 

const noStatusTasks = computed(() => {
    return tasks.value.filter((task) => {
        return task.status ===  "no status" ? task:undefined
    })
})
const needToDoTasks = computed(() => {
    return tasks.value.filter((task) => {
        return task.status ===  "need to do" ? task:undefined
    })
})
const atWorkTasks = computed(() => {
    return tasks.value.filter((task) => {
        return task.status ===  "at work" ? task:undefined
    })
})
const testingTasks = computed(() => {
    return tasks.value.filter((task) => {
        return task.status ===  "testing" ? task:undefined
    })
})
const readyTasks = computed(() => {
    return tasks.value.filter((task) => {
        return task.status ===  "ready" ? task:undefined
    })
})

</script>

<template>
    <div class="container main__content">
        <VColumn title="Без статуса" :tasks="noStatusTasks"/>
        <VColumn  title="Нужно сделать" :tasks="needToDoTasks" />
        <VColumn title="В работе" :tasks="atWorkTasks"/>
        <VColumn title="Тестирование" :tasks="testingTasks"/>
        <VColumn title="Готово" :tasks="readyTasks"/>

    </div>
        
    </template>
    