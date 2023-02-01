<script>
import ProductsSection from './AppMain/ProductsSection.vue';
import DeliverySection from './AppMain/DeliveySection.vue';
import WeddingSection from './AppMain/WeddingSection.vue'
export default {
    name: 'AppMain',
    components: { ProductsSection, DeliverySection, WeddingSection },
}
</script>
<template>
    <products-section></products-section>
    <wedding-section></wedding-section>
    <delivery-section></delivery-section>
</template>