<template>
  <nav id="nav">
    <router-link
      :to="{ name: 'home' }"
      :class="{ active: isActive('/') }"
    >
      Home
    </router-link>
    <div class="text-center">
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="transparent"
            v-bind="props"
          >
            Kategórie
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="category in categories"
            :key="category.slug"
            :to="{ name: 'category', params: { slug: category.slug }}"
            :class="{ active: isActive(category.slug) }"
            class="category-item"
          >
            <v-list-item-title class="category-item-title">{{ category.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div>
      <router-link
              to="/contact"
          >Kontakt
      </router-link>
      <router-link
              to="/aboutUs"
          >O nás
      </router-link>
      <router-link
              v-if="!isLoggedIn"
              to="/Login"
          >Login
      </router-link>
      <router-link
              v-if="!isLoggedIn"
              to="/Register"
          >Register
      </router-link>
      <v-btn @click="logout" v-if="isLoggedIn" class="logoutButton">
        Logout
      </v-btn>
    </div>
  </nav>
</template>

<script>
import CategoryData from '../data.json';
import { useAuthStore } from '../stores/auth';

export default {
  data() {
    return {
      categories: CategoryData.categories,
    };
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('isLoggedIn') === 'true';
    },
  },
  methods: {
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$router.push('/Login');
    },
    isActive(slug) {
      return this.$route.params.slug === slug || (this.$route.params.slug === undefined && slug === '/');
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  background: #2c3e50;
  padding: 10px 30px;
}
#nav div.text-center .v-list-item {
  margin-right: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
#nav div.text-center .v-list {
  width: 200px;
}
#nav div.text-center .v-list-item:hover {
  background-color: #34495e;
}
#nav div.text-center .v-list-item-title {
  color: white;
}
#nav div:last-child {
  margin-left: auto;
}
.logoutButton {
  background-color: rgba(128, 128, 128, 0.2);
  color: white;
  align-content: center;;
  padding: 1vh;
}
.logoutButton:hover {
  color:red;
}
.category-item:hover {
  background-color: rebeccapurple;
}
.category-item-title {
  color: black;
  font-weight: bold;
}
</style>
