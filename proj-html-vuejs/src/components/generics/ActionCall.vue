<script>
export default {
    name: 'ActionCall',
    props: { label: String, title: String, paragraph: String, button_label: String }
}
</script>

<template>
    <div>
        <h4 v-if="label">{{ label }}</h4>
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="paragraph">{{ paragraph }}</p>
        <button v-if="button_label">{{ button_label }}</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

div {
    width: 530px;
}

h4,
h2,
p {
    padding-bottom: 35px;
}

h2 {
    font-size: 25px;
}

p {
    line-height: 30px;
}

button {
    padding: 20px 30px;
    background-color: $violet4;
    color: white;
    border: transparent;
    border-radius: 5px;
    font-weight: 600;
}
</style>