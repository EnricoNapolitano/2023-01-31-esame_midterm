<script>
import ProductsSection from './AppMain/ProductsSection.vue';
import DeliverySection from './AppMain/DeliveySection.vue';
import WeddingSection from './AppMain/WeddingSection.vue';
import ShoppingCall from './AppMain/ShoppingCall.vue';
export default {
    name: 'AppMain',
    components: { ProductsSection, WeddingSection, ShoppingCall, DeliverySection, },
}
</script>
<template>
    <products-section></products-section>
    <wedding-section></wedding-section>
    <shopping-call></shopping-call>
    <delivery-section></delivery-section>
</template>