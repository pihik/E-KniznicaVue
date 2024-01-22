<template>
    <v-carousel
      height="400"
      hide-delimiter-background
      show-arrows="hover"
      style="border-radius: 10px; overflow: hidden;"
    >
      <v-carousel-item
        v-for="(book, i) in randomBooks"
        :key="i"
      >
        <v-sheet
          :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 50, 0.75)), url(/images/${book.categoryImage})` }"
          height="100%"
          style="border-radius: 10px; overflow: hidden; display: flex; align-items: center;"
        >
          <div>
            <v-img :src="`/images/${book.image}`" aspect-ratio="180/250" class="image-container"></v-img>
          </div>
          <div class="ml-4 text-white">
            <div class="text-h3 text-right">{{ book.name }}</div>
            <div class="text-right">{{ book.author }}</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
import data from "../data.json";

export default {
data() {
    return {
    books: [],
    randomBooks: []
    };
},
created() {
    this.loadData();
},
methods: {
    loadData() {
    this.books = data.categories.flatMap(category => category.experiences);
    this.getRandomBooks();
    },
    getRandomBooks() {
    const shuffledBooks = this.shuffleArray([...this.books]);
    this.randomBooks = shuffledBooks.slice(0, 5);
    },
    shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
    }
}
};
</script>

<style scoped>
.image-container {
width: 180px;
height: 250px;
object-fit: cover;
border-radius: 1vh;
margin: 2vh;
}
</style>
  