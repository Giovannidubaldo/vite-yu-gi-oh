<script>
import { store } from '../store.js';
export default {
    name: 'CardContainer',
    data() {
        return {
            store
        }
    }
}
</script>

<template lang="">
    <div class="card-container">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3" v-for="(card, index) in store.cardList" :key="index">
                    <div class="card-style">
                        <img :src="card.card_images" alt="" class="img-fluid">
                        <h4 class="text-center text-white">{{card.name}}</h4>
                        <h6 class="text-center mt-3">{{card.type}}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card-container {
    background-color: white;
    padding: 30px;

    .card-style {
        background-color: orange;
        margin: 20px;
        height: 200px;
    }
}
</style>