<template>
    <div class="bg">
        <div class="modal">
            <div v-if="hasCloseButton" class="button--close">
                <RouterLink to="/"><CloseIcon/></RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    hasCloseButton: {
        type: Boolean,
        required: false,
    }
}); 
</script>