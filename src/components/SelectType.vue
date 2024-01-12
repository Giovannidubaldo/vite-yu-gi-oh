<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'SelectType',
    data() {
        return {
            store,
            typeCard: []
        }
    },
    created() {
        this.getApi()
    },
    methods: {
        getApi() {
            axios.get(store.apiArchetype).then((response) => {
                this.typeCard = response.data.slice(0, 5);
            })
        }
    }
}
</script>

<template lang="">
    <div class="m-3">
        <select class="form-select form-select-sm" v-model="store.type" @change="$emit('filter_cards')">
            <option value="">Select Type</option>
            <option v-for="(type, index) in typeCard" :key="index" :value="type.archetype_name">
                {{type.archetype_name}}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
select {
    width: 300px;
}
</style>