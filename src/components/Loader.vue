<template>
    <div :style="{ width: width + 'px', heigh: heigh + 'px'}" class="loader"></div>
</template>

<script setup>
defineProps({
    width: {
        type: Number,
        default: 230,
    },
    height: {
        type: Number,
        default: 30,
    }
})
</script>

<style>
.loader {
    border-radius: 50px;
    background-color: #b1b1b1;
}
</style>