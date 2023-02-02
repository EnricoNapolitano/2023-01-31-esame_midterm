<script>
export default {
    name: 'ProductsGallery',
    props: { gallery: Array },
}
</script>
<template>
    <ul>
        <li v-for="item in gallery" :key="item.id"><img :src="item.src" :alt="item.title"></li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: flex-end;
}

li {
    padding: 0;
    padding-left: 20px;
}
</style>