<script>
import { store } from '../store';
export default {
    name: 'ResultFound',
    data() {
        return {
            store
        }
    },
    computed: {
        foundCard() {
            return store.cardList.length;
        }
    }
}
</script>

<template lang="">
    <div class="m-3">
        <div v-if="foundCard > 0">Found {{foundCard}} card</div>
        <div v-else>Not Found Card</div>
    </div>
</template>

<style lang="">
    
</style>