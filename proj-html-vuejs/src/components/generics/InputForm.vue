<script>
export default {
    name: 'InputForm',
    data() { return { value: '' } },
    props: { placeholder: String, text: String }
}
</script>
<template>
    <template>
        <form>
            <input type="text" v-model.trim="value" :placeholder="placeholder || 'Type here...'">
            <button> {{ text || 'SEND' }}</button>
        </form>
    </template>
</template>