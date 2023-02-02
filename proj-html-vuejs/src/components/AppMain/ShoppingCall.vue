<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import ProductsGallery from '../generics/ProductsGallery.vue';
export default {
    name: 'ShoppingCall',
    data() { return { data } },
    components: { ActionCall, ProductsGallery },
}
</script>
<template>
    <section id="shopping-call" class="container d-flex jc-between ai-center mv-section">
        <div>
            <action-call :title="data.shopping.title" :paragraph="data.shopping.paragraph"
                :button_label="data.shopping.button"></action-call>
        </div>
        <products-gallery :gallery="data.gallery.slice(0, 4)"></products-gallery>
    </section>
</template>

<style lang="scss">
#shopping-call {
    h2 {
        font-size: 2.5rem;
    }

    div {
        text-align: center;
    }

    ul {
        width: 1000px;
        height: auto;
    }

    li {
        padding-left: 20px;
        padding-right: 0;
    }

    img {
        max-width: 100%;
    }
}
</style>