<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-4">
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
            <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" :rules="passwordRules" required></v-text-field>

            <v-btn :disabled="!valid" color="primary" type="submit">Login</v-btn>

            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <p
                class="mt-3"
            >Need an account?
              <router-link
                  to="/register"
              >Register</router-link></p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      valid: true,
      errorMessage: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      const success = authStore.login(this.email, this.password);
      if (success) {
        // Redirect to the home page or another route
        this.$router.push({ name: 'home' });
      } else {
        this.errorMessage = "Incorrect email or password.";
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
