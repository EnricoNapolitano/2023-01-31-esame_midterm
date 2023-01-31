<script>
import { data } from '../../assets/data';
import LogoCompany from '../generics/LogoCompany.vue';
import NavMenu from '../generics/NavMenu.vue';
export default {
    name: 'TopHeader',
    data() { return { data } },
    components: { LogoCompany, NavMenu },
    computed: {
        upperCaseMenu() {
            return this.data.nav.map(word => word.toUpperCase());
        }
    }
}
</script>
<template>
    <header class="d-flex jc-between ai-center ph-30">
        <logo-company></logo-company>
        <nav-menu :menu="upperCaseMenu"></nav-menu>
    </header>
</template>