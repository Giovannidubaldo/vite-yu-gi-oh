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
                        <img :src="card.card_images[0].image_url" alt="" class="img-fluid">
                        <h4 class="text-center text-white m-2">{{card.name}}</h4>
                        <h6 class="text-center my-3">{{card.archetype}}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card-container {
    background-color: white;
    padding: 20px;

    .card-style {
        background-color: orange;
        margin: 10px;
        min-height: 500px;

        img {
            max-width: 100%;
        }
    }
}
</style>