<script>
export default {
    name: 'ButtonsGallery',
    emits: ['button-clicked']
}
</script>
<template>
    <button class="next" @click="$emit('button-clicked', 'next')">next</button>
    <button class="prev" @click="$emit('button-clicked', 'prev')">prev</button>
</template>