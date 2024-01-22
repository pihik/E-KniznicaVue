<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field class="searchBar"
          v-model="searchQuery"
          label="Search for a book..."
          @input="performSearch"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="searchResults.length > 0">
      <v-col v-for="result in searchResults" :key="result.slug" cols="12" md="6" lg="4">
        <router-link 
          :to="isLoggedIn ? { name: 'experience', params: { slug: result.slug }} : '/Login'"
          class="bookCard"
          @click="handleBookCardClick">
          <v-card class="resultCard">
            <v-card-title>{{ result.name }}</v-card-title>
            <v-card-subtitle class="authorText">{{ result.author }}</v-card-subtitle>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryData from '../data.json';

export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
    };
  },
  methods: {
    performSearch() {
      this.searchResults = this.searchBooks(this.searchQuery);
    },
    searchBooks(term) {
      if (term.length >= 3) {
        const matchingResults = [];
        const allExperiences = CategoryData.categories.flatMap(d => d.experiences);
        allExperiences.forEach(experience => {
          if (experience.name.toLowerCase().includes(term.toLowerCase())) {
            matchingResults.push(experience);
          }
        });
        return matchingResults;
      } else {
        return [];
      }
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
.resultCard {
  background-color: rgba(255, 255, 255, 0.797);
}
.authorText {
  color: black;
  font-weight: bold;
}
</style>
