<script>
export default {
    name: 'ProductsGallery',
    props: { gallery: Array },
}
</script>
<template>
    <ul>
        <li v-for="item in gallery"><img :src="item.src" :alt="item.title"></li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: flex-end;
}
</style>