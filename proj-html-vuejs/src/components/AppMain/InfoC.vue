<script>
import { data } from '../../assets/data';
import ArticolBox from '../generics/ArticolBox.vue';
export default {
    name: 'InfoC',
    data() { return { data } },
    components: { ArticolBox },
}
</script>
<template>
    <section id="info-c" class="container mv-section">
        <articol-box :title="data.infoC.title" :num="data.infoC.num" :subtitle="data.infoC.subtitle"
            :paragraph="data.infoC.paragraph"></articol-box>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/mixins' as*;

#info-c {
    height: 800px;
    background-image: url('../../assets/img/bakery-process-3.jpg');
    @include bg-image;

    .paragraph {
        align-items: flex-start;
        padding-top: 220px;
    }
}
</style>