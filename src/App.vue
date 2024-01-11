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
  created() {
    this.getCard()
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      let api = store.endpoint

      if (store.type !== '') {
        api += `?archetype=${store.type}`
      }

      axios.get(api).then((response) => {
        store.cardList = response.data.data;
        store.loading = false
      })
    }
  },
}
</script>

<template lang="">
  <div>
    <Loader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <main>
        <div class="container">
          <SelectType />
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