<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
export default {
    name: 'ProductsSection',
    data() { return { data } },
    components: { ActionCall },
}
</script>
<template>
    <action-call :label="data.products_label" :title="data.products_title"
        :button_label="data.products_button"></action-call>
</template>