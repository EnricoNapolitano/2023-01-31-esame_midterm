<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import ProductsGallery from '../generics/ProductsGallery.vue';
export default {
    name: 'ProductsSection',
    data() { return { data, currIndex: 0 } },
    components: { ActionCall, ProductsGallery },
}
</script>
<template>
    <section id="products-gallery" class="container d-flex jc-between ai-center mv-section">
        <action-call :label="data.products_label" :title="data.products_title"
            :button_label="data.products_button"></action-call>
        <products-gallery :gallery="data.gallery.slice(0, 2)"></products-gallery>
    </section>
</template>

<style lang="scss">
#products-gallery {
    ul {
        width: 800px;
        height: auto;
    }

    img {
        max-width: 100%;
    }
}
</style>