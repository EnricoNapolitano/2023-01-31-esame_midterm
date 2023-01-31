<script>
export default {
    name: 'InputForm',
    data() { return { value: '' } }
}
</script>
<template>
    <template>
        <form @submit.prevent="$emit('submit')">
            <input type="text" v-model.trim="value" @keyup="$emit('type', value)"
                :placeholder="placeholder || 'Type here...'">
            <button> {{ text || 'SEND' }}</button>
        </form>
    </template>
</template>