<script>
import ProductsSection from './AppMain/ProductsSection.vue';
import DeliverySection from './AppMain/DeliveySection.vue';
export default {
    name: 'AppMain',
    components: { ProductsSection, DeliverySection },
}
</script>
<template>
    <products-section></products-section>
    <delivery-section></delivery-section>
</template>