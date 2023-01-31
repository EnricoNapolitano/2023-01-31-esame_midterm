<script>
import { data } from '../../assets/data/index';
import ActionCall from '../generics/ActionCall.vue';
export default {
    name: 'HeroJumbo',
    data() { return { data } },
    components: { ActionCall }
}
</script>

<template>
    <section id="hero-jumbo">
        <action-call :label="data.jumbo_label" :title="data.jumbo_title" :paragraph="data.jumbo_paragraph"
            :botton_label="data.jumbo_button"></action-call>
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