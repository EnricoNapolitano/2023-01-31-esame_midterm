<script>
import ActionCall from '../generics/ActionCall.vue';
export default {
    name: 'HeroJumbo',
    components: { ActionCall }
}
</script>

<template>
    <section id="hero-jumbo">
        <action-call></action-call>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/mixins' as *;

#hero-jumbo {
    height: 750px;
    width: auto;
    @include bg-image
}
</style>