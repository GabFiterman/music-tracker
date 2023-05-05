<template>
  <v-container>
    <v-layout style="justify-content: center">
      <v-flex xs6>
        <v-card>
          <v-card-title>Register</v-card-title>
          <div class="inputGroup">
            <input
              type="text"
              name="email"
              v-model="email"
              placeholder="email"
            />
            <br />
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="password"
            />
          </div>
          <!-- <p v-if="error" class="error">{{ error }}</p> -->
          <div v-html="error" class="error" />
          <v-btn class="inputButton" @click="register">Register</v-btn>
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
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.error = null;
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: #c90000;
  font-style: italic;
  font-size: 0.85rem;
}

.v-card__title {
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #008e00;
}

.inputGroup input {
  outline: 1px solid #cccccc;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: .5rem 0;
}

.inputGroup input:focus {
  outline: 1px solid #595959;
}

.inputButton {
  margin: 2rem 0;
}
</style>
