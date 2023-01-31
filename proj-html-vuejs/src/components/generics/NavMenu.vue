<script>
export default {
    name: 'NavMenu',
    props: { menu: Array }
}
</script>

<template>
    <ul>
        <li v-for="item in menu"><a href="#">{{ item }}</a></li>
    </ul>
</template>