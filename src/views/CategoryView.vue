<template>
  <div>
    <header>
      <TheNavigation />
    </header>
    <div class="content">
      <div class="container">
        <h1 class="nadpis">{{ category.name }}</h1>
        <div class="header-image-container">
          <img :src="`/images/${category.image}`" :alt="category.name" class="header-image">
          <p>{{ category.description }}</p>
        </div>
        <div class="experiences">
          <router-view />
        </div>
        <div class="category-images">
          <div v-for="experience in category.experiences" :key="experience.slug" class="image-container">
            <router-link 
              :to="isLoggedIn ? { name: 'experience', params: { slug: experience.slug }} : '/Login'"
              class="bookCard"
              @click="handleBookCardClick">
              <img :src="`/images/${experience.image}`" :alt="experience.name" class="category-image">
              <p class="image-name">{{ experience.name }}</p>
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

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
  data() {
    return {
      categories: CategoryData.categories,
      category: this.getCategory(this.$route.params.slug),
    };
  },
  watch: {
    '$route.params': 'updateCategory',
  },
  methods: {
    getCategory(slug) {
      return CategoryData.categories.find((d) => d.slug === slug) || {};
    },
    updateCategory() {
      this.category = this.getCategory(this.$route.params.slug);
    },
    isActive(slug) {
      return this.$route.params.slug === slug || (this.$route.params.slug === undefined && slug === '/');
    },
    handleBookCardClick() {
      if (!this.isLoggedIn) {
        alert("Pre zobrazenie knihy sa prihlás");
      }
    },
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('isLoggedIn') === 'true';
    },
  },
};
</script>

<style scoped>
.header-image-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
.header-image-container p {
    flex: 1;
    text-align: left;
    color: white;
    font-size: 20px;
}
.category-images .image-container {
  display: inline-block;
  margin-right: 50px;
  text-align: center;
}
.category-images img {
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.header-image {
    width: 100px;
    height: auto;
    border-radius: 4px;
    border: 3px solid white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin-right: 20px;
}
.image-name {
  margin-top: 1vh;
  margin-bottom: 2vh;
  font-size: 1.5vh;
}
.nadpis {
  text-align: center;
  scale: 125%;
}
.bookCard:hover .image-name {
  color: green;
  transform: scale(1.1);
}
</style>
