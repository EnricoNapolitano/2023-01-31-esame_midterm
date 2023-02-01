<script>
export default {
    name: 'ProductsGallery',
    props: { gallery: Array },
}
</script>
<template>
    <figure>
        <img v-for="item in gallery" :src="item.src" :alt="item.title">
    </figure>
</template>

<style scoped>
figure {
    display: flex;
    justify-content: flex-end;
}
</style>