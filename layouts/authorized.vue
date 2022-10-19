<template>
    <div class='flex flex-col h-screen'>
        <Header />
        <Content>
            <slot />
        </Content>
    </div>
</template>
<script setup>
import Content from '../components/Content';
</script>
