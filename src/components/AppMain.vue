<script>
import CardContainer from './CardContainer.vue';

export default {
    name: 'AppMain',
    components: {
        CardContainer,
    },
}
</script>

<template lang="">
    <main>
        <div class="container">
            <!-- Select -->

            <!-- Contenitore carte -->
            <CardContainer />
        </div>
    </main>
</template>

<style lang="scss">
main {
    background-color: orange;
    padding: 50px;

}
</style>