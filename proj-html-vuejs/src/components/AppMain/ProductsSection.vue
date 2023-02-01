<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import PicturesGallery from '../generics/PicturesGallery.vue';
export default {
    name: 'ProductsSection',
    data() { return { data } },
    components: { ActionCall, PicturesGallery },
}
</script>
<template>
    <action-call :label="data.products_label" :title="data.products_title"
        :button_label="data.products_button"></action-call>
    <pictures-gallery :gallery="data.gallery"></pictures-gallery>
</template>