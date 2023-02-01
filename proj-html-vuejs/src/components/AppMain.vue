<script>
import ProductsSection from './AppMain/ProductsSection.vue';
import DeliverySection from './AppMain/DeliveySection.vue';
import WeddingSection from './AppMain/WeddingSection.vue';
import ShoppingCall from './AppMain/ShoppingCall.vue';
import InfoA from './AppMain/InfoA.vue';
export default {
    name: 'AppMain',
    components: { ProductsSection, WeddingSection, ShoppingCall, InfoA, DeliverySection, },
}
</script>
<template>
    <products-section></products-section>
    <wedding-section></wedding-section>
    <shopping-call></shopping-call>
    <info-a></info-a>
    <delivery-section></delivery-section>
</template>