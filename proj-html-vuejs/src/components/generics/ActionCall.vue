<script>
export default {
    name: 'ActionCall',
    props: { label: String, title: String, paragraph: String, botton_label: String }
}
</script>

<template>
    <h4>{{ label }}</h4>
    <h2>{{ title }}</h2>
    <p>{{ paragraph }}</p>
    <button>{{ botton_label }}</button>
</template>