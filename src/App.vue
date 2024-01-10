<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      axios.get(store.endpoint).then((response) => {
        this.store.cardList = response.data.data
      })
    }
  },
  created() {
    this.getCard()
  }
}
</script>

<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>