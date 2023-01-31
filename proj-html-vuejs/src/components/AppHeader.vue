<script>
import TopHeader from './AppHeader/TopHeader.vue';
import HeroJumbo from './AppHeader/HeroJumbo.vue';
export default {
    name: 'AppHeader',
    components: { TopHeader, HeroJumbo }
}
</script>
<template>
    <header>
        <top-header></top-header>
        <hero-jumbo></hero-jumbo>
    </header>
</template>