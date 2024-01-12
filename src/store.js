import { reactive } from 'vue';

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0',
    apiArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardList: [],
    loading: true,
    type: ''
})