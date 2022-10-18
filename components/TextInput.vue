<template>
    <input
        class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
        :class='className'
        id='password'
        :type='type'
        :placeholder='placeholder'
        v-model='modelValue'
        @input='onInput'
    >
</template>

<script setup>
const props = defineProps({
    placeholder: String,
    modelValue: String,
    type: String,
    className: String,
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>
