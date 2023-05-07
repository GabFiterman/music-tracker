<template>
  <v-container fluid class="Auth">
    <v-layout justify-center align-center>
      <v-flex xs6>
        <v-card class="auth__card">
          <v-card-title class="auth__card--title">Register</v-card-title>
          <form
            name="musicTrackerForm"
            autocomplete="off"
            class="auth__card--inputGroup"
          >
            <v-text-field
              type="text"
              name="email"
              v-model="email"
              placeholder="email"
              rounded
              dense
              autocomplete="email"
            />
            <br />
            <v-text-field
              type="password"
              name="password"
              v-model="password"
              placeholder="password"
              autocomplete="new-password"
              rounded
              dense
            />
          </form>
          <!-- TODO: verify another way to show text with html tags. Simple {{ don't works }}  -->
          <div v-html="error" class="auth__error" />
          <v-btn class="auth__card--button" @click="register">Register</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from "../../../server/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: undefined,
      password: undefined,
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        
        this.error = null;
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/Auth.scss";
</style>
