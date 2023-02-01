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
    <section id="hero-jumbo" class="d-flex ai-center">
        <div class="container">
            <action-call :label="data.jumbo_label" :title="data.jumbo_title" :paragraph="data.jumbo_paragraph"
                :button_label="data.jumbo_button"></action-call>
        </div>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/mixins' as *;

#hero-jumbo {
    height: 750px;
    width: auto;
    background-image: url('../../assets/img/hero-header-bakery.jpg');
    @include bg-image;

    h2 {
        font-size: 55px;
    }
}
</style>