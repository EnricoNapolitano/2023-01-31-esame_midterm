<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
import SocialPictures from '../generics/SocialPictures.vue';
export default {
    name: 'ContactBakery',
    data() { return { data } },
    components: { ActionCall, SocialPictures }
}
</script>
<template>
    <section id="contact-bakery" class="container mv-section">
        <div class="row d-flex">
            <figure>
                <img src=../../assets/img/social-1.jpg alt="social post">
            </figure>
            <div class="contact d-flex jc-center ai-center">
                <action-call :label="data.social_label" :title="data.social_title"
                    :button_label="data.social_button"></action-call>
            </div>
            <figure>
                <img src=../../assets/img/social-2.jpg alt="social post">
            </figure>
        </div>
        <social-pictures :pictures="data.social_pictures"></social-pictures>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variables' as*;

#contact-bakery {
    h4 {
        font-size: 0.8rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    .row {
        margin: 20px -20px;
        justify-content: space-between;
    }

    .contact {
        width: calc(50% - 40px);
        background-color: $violet3;

        text-align: center;
    }

    figure {
        width: calc(100% / 4);
        padding: 0 20px;
    }

    img {
        max-width: 100%;
    }
}
</style>