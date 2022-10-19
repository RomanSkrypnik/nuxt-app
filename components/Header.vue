<template>
    <header class='flex items-center justify-between flex-wrap bg-teal p-6'>
        <div class='flex items-center flex-no-shrink mr-6'>
            <Logo />
            <span class='font-semibold text-xl'>Tailwind CSS</span>
        </div>
        <Menu as='div' class='relative inline-block text-left'>
            <div>
                <MenuButton
                    class='inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700'>
                    <div class='block lg:flex lg:items-center lg:w-auto'>
                        <img
                            class='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt='Avatar'
                        >
                    </div>
                </MenuButton>
            </div>

            <transition enter-active-class='transition ease-out duration-100'
                        enter-from-class='transform opacity-0 scale-95' enter-to-class='transform opacity-100 scale-100'
                        leave-active-class='transition ease-in duration-75'
                        leave-from-class='transform opacity-100 scale-100'
                        leave-to-class='transform opacity-0 scale-95'>
                <MenuItems
                    class='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div class='py-1'>
                        <MenuItem v-slot='{ active }'>
                            <a href='#'
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account
                                settings</a>
                        </MenuItem>
                        <MenuItem v-slot='{ active }'>
                            <a href='#'
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                        </MenuItem>
                        <MenuItem v-slot='{ active }'>
                            <a href='#'
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                        </MenuItem>
                        <form method='POST' action='#'>
                            <MenuItem v-slot='{ active }'>
                                <button type='submit'
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">
                                    Sign out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </header>
</template>

<script setup lang='ts'>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import Logo from './Logo.vue';
</script>
