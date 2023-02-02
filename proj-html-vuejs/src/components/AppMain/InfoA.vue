<script>
import { data } from '../../assets/data';
import ArticolBox from '../generics/ArticolBox.vue';
export default {
    name: 'InfoA',
    data() { return { data } },
    components: { ArticolBox }
}
</script>
<template>
    <section id="info-a" class="container mv-section">
        <articol-box :title="data.infoA.title" :num="data.infoA.num" :subtitle="data.infoA.subtitle"
            :paragraph="data.infoA.paragraph"></articol-box>
    </section>
</template>

<style lang="scss">
#info-a {
    height: 800px;
    background-image: url('../../assets/img/bakery-process-1.jpg');
}

.paragraph {
    align-items: flex-end;
}
</style>