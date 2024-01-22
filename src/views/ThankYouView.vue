<template>
    <div>
      <header>
        <TheNavigation />
      </header>
      <div class="content">
        <div class="container">
            <p>Ďakujeme že ste nás kontaktovali, posnažíme sa váš dotaz spracovať v čo najkratšom čase, očakávajte našu spätnú väzbu</p><br>
            <p>Ďakujeme!</p>
        </div>
      </div>
      <footer>
        <TheFooter />
      </footer>
    </div>
</template>
  
<script>
import TheFooter from '../components/TheFooter.vue';
import TheNavigation from '../components/TheNavigation.vue';

export default {
    components: {
        TheNavigation,
        TheFooter,
    }
};
</script>

<style scoped>

</style>
  