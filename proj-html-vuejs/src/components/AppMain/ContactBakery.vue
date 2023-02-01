<script>
import { data } from '../../assets/data';
import SocialPictures from '../generics/SocialPictures.vue';
export default {
    name: 'ContactBakery',
    data() { return { data } },
    components: { SocialPictures }
}
</script>
<template>
    <section id="contact-bakery" class="container mv-section">
        <social-pictures :pictures="data.social_pictures"></social-pictures>
    </section>
</template>

<style lang="scss">

</style>