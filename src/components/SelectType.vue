<script>
import { store } from '../store.js';
export default {
    name: 'SelectType',
    data() {
        return {
            store,
            typeCard: [
                'Alien',
                'Infernoble Arms',
                'Noble Knight',
                'Melodius',
                'Archfiend'
            ]
        }
    }
}
</script>

<template lang="">
    <div class="m-3">
        <select class="form-select form-select-sm">
            <option value="">Select Type</option>
            <option v-for="(type, index) in typeCard" :key="index" :value="type">
                {{type}}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
select {
    width: 300px;
}
</style>