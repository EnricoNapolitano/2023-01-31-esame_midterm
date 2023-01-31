<script>
import { data } from '../../assets/data';
import LogoCompany from '../generics/LogoCompany.vue';
import NavMenu from '../generics/NavMenu.vue';
export default {
    name: 'TopFooter',
    data() { return { data } },
    components: { LogoCompany, NavMenu },
    computed: {

        //adapting nav data to footer menu
        footerMenu() {
            //removing first element
            const menu = this.data.nav.splice(1);
            //changing last element with another string
            menu[menu.length - 1] = 'Orders';
            return menu;
        }
    }
}
</script>

<template>
    <footer class="p-30">
        <logo-company class="pb-30"></logo-company>
        <nav-menu :menu="footerMenu"></nav-menu>
    </footer>
</template>