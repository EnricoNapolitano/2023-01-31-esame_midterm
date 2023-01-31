<script>
export default {
    name: 'LogoCompany',
    computed: {
        logoPath() {
            return new URL('../../assets/img/avada-bakery-logo-retina-200x97.png', import.meta.url).href
        }
    }
}
</script>

<template>
    <figure>
        <img :src="logoPath" alt="logo company">
    </figure>
</template>