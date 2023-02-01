<script>
export default {
    name: 'SocialPictures',
    props: { pictures: Array }
}
</script>
<template>
    <ul class="row d-flex jc-between">
        <li v-for="pic in pictures"><img :src="pic" alt="social post"></li>
    </ul>
</template>

<style lang="scss" scoped>
li {
    width: calc(100% / 4);
    padding: 20px;

    img {
        max-width: 100%;
    }
}
</style>