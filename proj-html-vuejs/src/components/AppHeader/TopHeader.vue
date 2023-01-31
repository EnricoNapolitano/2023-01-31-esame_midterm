<script>
import { data } from '../../assets/data';
import LogoCompany from '../generics/LogoCompany.vue';
import NavMenu from '../generics/NavMenu.vue';
export default {
    name: 'TopHeader',
    data() { return { data } },
    components: { LogoCompany, NavMenu }
}
</script>
<template>
    <header class="d-flex jc-between ai-center ph-30">
        <logo-company></logo-company>
        <nav-menu :menu="data.nav"></nav-menu>
    </header>
</template>