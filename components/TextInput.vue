<template>
    <input
        class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
        :class='className'
        :type='type'
        :placeholder='placeholder'
        v-model='modelValue'
        @input='updateValue'
    >
</template>

<script setup lang='ts'>

const props = defineProps({
    placeholder: String,
    modelValue: String,
    type: String,
    className: String,
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
</script>
