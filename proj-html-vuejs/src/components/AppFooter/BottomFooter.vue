<script>
import { data } from '../../assets/data';
export default {
    name: 'BottomHeader',
    data() { return { data } }
}
</script>

<template>
    <footer class="d-flex jc-between p-30">
        <h5>&#169; Copyright 2012-2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by Myself</h5>
        <ul class="d-flex">
            <li v-for="social in data.socials" :key="social.id"><a href="#"><i :class="social.class"></i></a></li>
        </ul>
    </footer>
</template>

<style>
li {
    padding-right: 20px
}
</style>