<template>
  <div>
    <header>
      <TheNavigation />
    </header>
    <div class="content">
      <div class="container">
        <h1>{{ experience.author }}</h1><br>
        <h2>{{ experience.name }}</h2>
        <div class="header-image-container">
          <img :src="`/images/${experience.image}`" :alt="experience.name" class="header-image">
          <p>{{ experience.description }}</p>
        </div><hr><br>
        <div class="description-text">
          <p>{{ experience.text }}</p>
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
        experience: this.getExperience(this.$route.params.slug),
      };
    },
    props: {
      slug: { type: String, required: true },
    },
    watch: {
      '$route.params': 'updateExperience',
    },
    methods: {
      getExperience(slug) {

        const allExperiences = CategoryData.categories.flatMap(d => d.experiences);
        return allExperiences.find(e => e.slug === slug) || {};
      },
      updateExperience() {
        this.experience = this.getExperience(this.$route.params.slug);
      },
    },
  };
  </script>
  
<style scoped>
.header-image-container {
      display: flex;
      align-items: top;
      margin: 20px;
    }
  .header-image-container p {
      flex: 1;
      text-align: left;
      color: white;
      font-size: 20px;
  }
  .description-text {
    text-align: left;
    font-size: 18px;
  }
  .header-image {
      width: 100px;
      height: auto;
      border-radius: 4px;
      border: 3px solid white;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      margin-right: 20px;
  }
</style>
  