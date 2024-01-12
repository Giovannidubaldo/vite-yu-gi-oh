<script>
import Loader from './components/Loader.vue';
import AppHeader from './components/AppHeader.vue';
import SelectType from './components/SelectType.vue';
import ResultFound from './components/ResultFound.vue';
import CardContainer from './components/CardContainer.vue';

import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    Loader,
    AppHeader,
    SelectType,
    ResultFound,
    CardContainer,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCard()
  },
  methods: {
    getCard() {
      let endpoint = store.endpoint;
      if (store.type !== '') {
        endpoint += `&archetype=${store.type}`
      }
      axios.get(endpoint).then((response) => {
        store.cardList = response.data.data;
        store.loading = false
      })
    },
    filterCardsArchetype() {
      this.getCard()
    }
  }
}

</script>

<template lang="">
  <div>
    <Loader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <main>
        <div class="container">
          <SelectType @filter_cards="filterCardsArchetype"/>
          <ResultFound />
          <CardContainer />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>