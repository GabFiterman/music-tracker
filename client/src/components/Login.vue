<template>
  <v-container fluid class="Login">
    <v-layout justify-center align-center>
      <v-flex xs6>
        <v-card class="login__card">
          <v-card-title class="login__card--title">Login</v-card-title>
          <div class="login__card--inputGroup">
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
          <!-- TODO: verify another way to show text with html tags. Simple {{ don't works }}  -->
          <div v-html="error" class="login__error" />
          <v-btn class="login__card--button" @click="login">Login</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '../../../server/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: undefined,
      password: undefined,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Login {
  height: 100vh;
  background-color: #E8D4ED;

.login__card {
  min-height: 65vh;
  max-width: 35vw;
  margin: 0 auto;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.login__card--title {
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #4d0f56;
}

.login__card--inputGroup input{
  margin: 2vh 0;
  color: #9673a0;
}

.login__error {
  color: #c90000;
  font-style: italic;
  font-size: 0.85rem;
  max-width: 25vw;
}

.login__card--button {
  margin: 2rem 0;
  width: 15vw;
  border-radius: 2rem;
  background-color: #4d0f56 !important;
  color: white;
  border-top: #C490D1 2px solid;
}
}
</style>
