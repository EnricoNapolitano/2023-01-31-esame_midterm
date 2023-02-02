<script>
import { data } from '../../assets/data';
import ArticolBox from '../generics/ArticolBox.vue';
export default {
    name: 'InfoB',
    data() { return { data } },
    components: { ArticolBox }
}
</script>
<template>
    <section id="info-b" class="container mv-section">
        <div class="col-left">
            <articol-box :title="data.infoB.title" :num="data.infoB.num" :subtitle="data.infoB.subtitle"
                :paragraph="data.infoB.paragraph"></articol-box>
        </div>
        <div class="col-right">
            <h4>DON'T JUST TAKE OUR WORD FOR IT</h4>
            <h2>"Finally found an alternative to the mass produced products.
                Something that incorporates real organic ingredients, nutrient dense wellness while promoting
                sustainability and activity".
            </h2>
            <h4>Rachel Couper, Founder</h4>
        </div>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/mixins' as*;
@use '../../assets/scss/partials/variables' as*;

#info-b {

    display: flex;
    justify-content: space-between;

    .paragraph {
        padding: 200px 100px;
        width: 80%;
    }

    .col-left {
        width: 48%;
        background-image: url('../../assets/img/bakery-process-2.jpg');
        @include bg-image;
    }

    .col-right {
        width: 48%;
        padding: 60px;
        @include center-align;
        align-items: flex-start;

        background-color: $violet3;

        h2 {
            font-size: 3rem;
            line-height: 65px;
            padding: 65px 0;
        }
    }
}
</style>