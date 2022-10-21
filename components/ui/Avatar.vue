<template>
<!--    <Menu as='div' class='relative inline-block text-left'>-->
<!--        <MenuButton class='inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700'>-->
<!--            <div class='block lg:flex lg:items-center lg:w-auto'>-->
<!--                <img class='inline-block h-10 w-10 rounded-full ring-2 ring-white' :src='props.src' alt='Avatar'>-->
<!--            </div>-->
<!--        </MenuButton>-->
<!--        <transition-->
<!--            v-if='props.items'-->
<!--            enter-active-class='transition ease-out duration-100'-->
<!--            enter-from-class='transform opacity-0 scale-95'-->
<!--            enter-to-class='transform opacity-100 scale-100'-->
<!--            leave-active-class='transition ease-in duration-75'-->
<!--            leave-from-class='transform opacity-100 scale-100'-->
<!--            leave-to-class='transform opacity-0 scale-95'>-->
<!--            <MenuItems-->
<!--                class='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>-->
<!--                <div class='py-1'>-->
<!--                    <MenuItem v-slot='{ active }' v-for='item in props.items' @click='item.click'>-->
<!--                        <a href='#'-->
<!--                           :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">-->
<!--                            {{ item.label }}-->
<!--                        </a>-->
<!--                    </MenuItem>-->
<!--                </div>-->
<!--            </MenuItems>-->
<!--        </transition>-->
<!--    </Menu>-->
</template>

<script setup lang='ts'>
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import img from '@/assets/images/avatar.png';

interface Props {
    click?: () => void;
    src?: string;
    items?: { label: String, click: Function }[];
}

const props = withDefaults(defineProps<Props>(), {
    src: img,
});
</script>
