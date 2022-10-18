<template>
    <button
        class='bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
        :class='className'
        @click='click'
        :type='type'>
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    click: {
        default: () => {},
    },
    className: {
        type: String,
    },
    type: {
        type: String,
        default: 'button'
    }
});
</script>
