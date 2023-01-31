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
    <header>
        <logo-company></logo-company>
        <nav-menu :menu="data.header_nav"></nav-menu>
    </header>
</template>