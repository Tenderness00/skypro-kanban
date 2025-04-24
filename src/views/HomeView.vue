<script setup>

import CreatingTaskView from '@/components/CreatingTaskView.vue';
import HeadView from '@/components/HeadView.vue';
import Loader from '@/components/Loader.vue';
import TaskDesk from '@/components/TaskDesk.vue';
import {onMounted, ref} from 'vue';

const loading = ref(true) 

onMounted(() => {
 setTimeout(() => {
      loading.value = false
 }, 3000);
})

// const loading = ref(false)

</script>


<template>
            <CreatingTaskView /> 
            <HeadView/>
            <div v-if="loading">Идет загрузка...</div>
                  <TaskDesk v-else/>
</template>


