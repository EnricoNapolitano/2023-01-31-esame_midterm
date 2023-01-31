<script>
import { data } from '../../assets/data';
import LogoCompany from '../generics/LogoCompany.vue';
import NavMenu from '../generics/NavMenu.vue';
import InputForm from '../generics/InputForm.vue';
export default {
    name: 'TopFooter',
    data() { return { data, placeholder: 'Enter email address', text: 'subscribe' } },
    components: { LogoCompany, NavMenu, InputForm },
    computed: {

        //adapting nav data to footer menu
        footerMenu() {
            //cloning the array
            const footerNav = [...this.data.nav]
            //removing first element
            const menu = footerNav.splice(1);
            //changing last element with another string
            menu[menu.length - 1] = 'Orders';
            return menu;
        }
    }
}
</script>

<template>
    <footer class="d-flex jc-between ai-center p-30">
        <div>
            <logo-company class="pb-30"></logo-company>
            <nav-menu :menu="footerMenu"></nav-menu>
        </div>
        <div class="form">
            <h3>Subscribe to our Newsletter</h3>
            <input-form :placeholder="placeholder" :text="text"></input-form>
        </div>
    </footer>
</template>

<style lang="scss">
.form {
    text-align: right;

    h3 {
        font-family: "Playfair Display", serif;
        padding-bottom: 40px;
    }
}
</style>