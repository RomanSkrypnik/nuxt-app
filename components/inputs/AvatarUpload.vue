<template>
    <div class='py-3 center mx-auto' :class='props.className'>
        <div class='bg-white rounded-lg text-center'>
            <label>
                <img
                    class='w-auto mx-auto rounded-full object-cover object-center image'
                    :src='avatar ?? img'
                    alt='Avatar Upload' />
                <input type='file' class='hidden' @change='handleChange' />
            </label>
        </div>
    </div>
</template>

<script setup lang='ts'>
import img from '~/assets/images/avatar.png';

interface Props {
    src?: string;
    className?: string;
}

const props = defineProps<Props>();

const avatar = ref(props.src);

const emit = defineEmits(['change']);

const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
        const file = target.files[0];
        avatar.value = URL.createObjectURL(file);
        target.files && emit('change', file);
    }
};
</script>

<style scoped>
.image {
    width: 100px;
    height: 100px;
}
</style>
