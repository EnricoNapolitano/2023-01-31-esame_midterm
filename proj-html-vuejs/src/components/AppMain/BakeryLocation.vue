<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import StoreInfo from '../generics/StoreInfo.vue';
export default {
    name: 'BakeryLocation',
    data() { return { data } },
    components: { ActionCall, StoreInfo },
}
</script>
<template>
    <section id="bakery-location" class="container">
        <div class="title d-flex jc-center">
            <action-call :label="data.location.label" :title="data.location.title"></action-call>
        </div>
        <ul class="d-flex">
            <li v-for="pic in data.store" :key="pic.id"><img :src="pic.img" alt="store picture"></li>
        </ul>
        <div class="row d-flex">
            <div class="location a">
                <store-info city="New York"></store-info>
            </div>
            <div class="location b">
                <store-info city="London"></store-info>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variables' as*;

#bakery-location {
    h4 {
        font-size: 0.8rem;
        padding-bottom: 25px;
    }

    h2 {
        font-size: 2.5rem;
    }

    li {
        padding: 0;
    }

    img {
        max-width: 100%;
    }

    .title {
        text-align: center;
    }

    .location {
        padding: 30px;
        flex-grow: 1;
    }

    .location.a {
        background-color: $blue1;

    }

    .location.b {
        background-color: $pink1;
    }
}
</style>