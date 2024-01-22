<template>
  <div class="home">
    <header>
      <TheNavigation />
    </header>
    <div class="content">
      <div class="container">
        <p class="text-h4 text-left ml-4">Vyhľadaj svoju obľúbenú knihu</p>
        <TheSearch />
        <TheCarousel />
        <h1 class="nadpis">Kategorie</h1>
        <div class="categories">
          <div v-for="category in categoryData.categories" :key="category.id" class="category-card">
            <router-link :to="{ name: 'category', params: { slug: category.slug, image: category.image }}">
              <h2>{{ category.name }}</h2>
              <img :src="'/images/' + category.image" :alt="category.name">
              
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import CategoryData from '../data.json';
import TheFooter from '../components/TheFooter.vue';
import TheNavigation from '../components/TheNavigation.vue';
import TheSearch from '../components/TheSearch.vue';
import TheCarousel from '../components/TheCarousel.vue';

export default {
  components: {
    TheNavigation,
    TheFooter,
    TheSearch,
    TheCarousel,
  },
  data() {
    return {
      categoryData: CategoryData,
    };
  },
};
</script>

<style scoped>

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.category-card {
  flex: 0 1 calc(33.3333% - 20px); 
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 4vh;
}

.category-card img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 5px solid #6288ae;
}

.image-name {
  margin-top: 5px;
  font-weight: bold;
}
.nadpis {
  text-align: center;
  margin-bottom: 50px;
}
</style>
