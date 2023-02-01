<script>
import { data } from '../../assets/data';
import ActionCall from '../generics/ActionCall.vue';
export default {
    name: 'WeddingSection',
    data() { return { data } },
    components: { ActionCall },
}
</script>
<template>
    <action-call :label="data.event_label" :title="data.event_title"></action-call>
</template>