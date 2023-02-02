<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
export default {
    name: 'WeddingSection',
    data() { return { data } },
    components: { ActionCall },
}
</script>
<template>
    <section id="wedding-section" class="container mv-section">
        <div>
            <action-call :label="data.event_label" :title="data.event_title"></action-call>
        </div>
        <ul class="d-flex jc-between">
            <li v-for="img in data.event_img"><img :src="img.src" :alt="img.event"></li>
        </ul>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/mixins' as*;

#wedding-section {
    h4 {
        font-size: 0.8rem;
        padding-bottom: 25px;
    }

    h2 {
        font-size: 2.5rem;
    }

    div {
        text-align: center;
        @include center-align;
    }

    li {
        margin: 0 30px;
    }

    img {
        max-width: 100%;
    }
}
</style>