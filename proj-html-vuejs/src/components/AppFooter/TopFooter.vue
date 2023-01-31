<script>
import { data } from '../../assets/data';
import LogoCompany from '../generics/LogoCompany.vue';
import NavMenu from '../generics/NavMenu.vue';
export default {
    name: 'TopFooter',
    data() { return { data } },
    components: { LogoCompany, NavMenu },
    computed: {
        //removing 'home' from nav array
        footerMenu() { return this.data.nav.splice(1) }
    }
}
</script>

<template>
    <footer class="ph-30">
        <logo-company></logo-company>
        <nav-menu :menu="footerMenu"></nav-menu>
    </footer>
</template>