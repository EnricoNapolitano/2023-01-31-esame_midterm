<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import PicturesGallery from '../generics/PicturesGallery.vue';
export default {
    name: 'ProductsSection',
    data() { return { data } },
    components: { ActionCall, PicturesGallery },
    computed: {
        imagesPath() {
            const baseUrl = '/src/assets/img/';
            return this.data.gallery.map(img => baseUrl + img);
        }
    }
}
</script>
<template>
    <action-call :label="data.products_label" :title="data.products_title"
        :button_label="data.products_button"></action-call>
    <pictures-gallery :gallery="imagesPath"></pictures-gallery>
</template>