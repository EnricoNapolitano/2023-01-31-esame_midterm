<script>
import ProductsSection from './AppMain/ProductsSection.vue';
import DeliverySection from './AppMain/DeliveySection.vue';
import WeddingSection from './AppMain/WeddingSection.vue';
import ShoppingCall from './AppMain/ShoppingCall.vue';
import InfoA from './AppMain/InfoA.vue';
import InfoB from './AppMain/InfoB.vue';
import InfoC from './AppMain/InfoC.vue';
export default {
    name: 'AppMain',
    components: { ProductsSection, WeddingSection, ShoppingCall, InfoA, InfoB, InfoC, DeliverySection, },
}
</script>
<template>
    <products-section></products-section>
    <wedding-section></wedding-section>
    <shopping-call></shopping-call>
    <info-a></info-a>
    <info-b></info-b>
    <info-c></info-c>
    <delivery-section></delivery-section>
</template>