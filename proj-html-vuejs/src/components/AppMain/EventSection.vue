<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
export default {
    name: 'EventSection',
    data() { return { data } },
    components: { ActionCall },
}
</script>
<template>
    <section id="event-section" class="container mv-section">
        <div>
            <action-call :label="data.event.label" :title="data.event.title"></action-call>
        </div>
        <ul class="d-flex jc-between">
            <li v-for="img in data.event.img" :key="img.event"><img :src="img.src" :alt="img.event"></li>
        </ul>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/mixins' as*;

#event-section {
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

    ul {
        margin: 0 -30px;
    }

    li {
        margin: 0 30px;
        padding: 0;
    }

    img {
        max-width: 100%;
    }
}
</style>