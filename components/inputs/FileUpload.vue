<template>
    <div class='flex justify-center'>
        <div class='mb-3 w-96'>
            <label class='form-label inline-block mb-2 text-gray-700'>{{ placeholder }}</label>
            <input
                :multiple='multiple'
                @change='handleChange'
                class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='file'
            >
        </div>
    </div>
</template>
<script setup lang='ts'>
interface Props {
    placeholder?: string;
    className?: string;
    multiple?: boolean;
}

const { placeholder, multiple, className } = withDefaults(defineProps<Props>(), {
    placeholder: 'Upload file',
    multiple: false,
});

const handleChange = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log('selected file', target.files);
};
</script>
