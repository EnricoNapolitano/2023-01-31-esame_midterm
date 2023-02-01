<script>
export default {
    name: 'PicturesGallery',
    props: { gallery: Array }
}
</script>
<template>
    <figure>
        <img v-for="pic in gallery" :src="pic" alt="product image">
    </figure>
</template>