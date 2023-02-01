<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import ButtonsGallery from '../generics/ButtonsGallery.vue';
export default {
    name: 'ProductsSection',
    data() { return { data, currIndex: 0 } },
    components: { ActionCall, ButtonsGallery },
    methods: {
        changePic(text) {
            if (text === 'prev') {
                if (this.currIndex !== 0) this.currIndex--;
                else this.currIndex = this.data.gallery.src.length - 1;
            } else {
                if (this.currIndex !== this.data.gallery.src.length - 1) this.currIndex++;
                else this.currIndex = 0;
            };
        }
    }
}
</script>
<template>
    <action-call :label="data.products_label" :title="data.products_title"
        :button_label="data.products_button"></action-call>
    <figure v-for="(pic, i) in data.gallery">
        <img v-if="i === currIndex" :src="pic.src" alt="product">
    </figure>
    <buttons-gallery @button-clicked="changePic"></buttons-gallery>
</template>