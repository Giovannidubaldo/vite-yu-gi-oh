<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Loader from './components/Loader.vue';

import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    Loader,
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
        this.store.cardList = response.data.data;
        this.store.loading = false
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
    <Loader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>