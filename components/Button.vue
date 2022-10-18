<template>
    <button :class='className' @click='click' :type='type'><slot /></button>
</template>

<script setup>
const props = defineProps({
    click: {
        default: () => {},
    },
    className: {
        type: String,
        default: 'bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded',
    },
    type: {
        type: String,
        default: 'button'
    }
});
</script>
