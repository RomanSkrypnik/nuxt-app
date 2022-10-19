<template>
    <input
        class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
        :class='props.className'
        :type='props.type'
        :placeholder='props.placeholder'
        v-model='props.modelValue'
        @input='updateValue'
    >
</template>

<script setup lang='ts'>
interface Props {
    placeholder?: string;
    modelValue?: string;
    type?: string;
    className?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
</script>
