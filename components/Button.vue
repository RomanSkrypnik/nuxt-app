<template>
    <button
        class='bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
        :class='className'
        @click='click'
        :disabled='disabled'
        :type='type'>
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    click: {
        default: () => {
        },
    },
    className: {
        type: String,
    },
    type: {
        type: String,
        default: 'button',
    },
});
</script>
