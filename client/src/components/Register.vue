<template>
  <div class="Register">
    <v-container>
      <v-layout style="justify-content: center">
        <v-flex xs6>
          <v-card class="register__card">
            <v-card-title class="register__card--title">Register</v-card-title>
            <div class="register__card--inputGroup">
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
            <div v-html="error" class="register__error" />
            <v-btn class="register__card--button" @click="register">Register</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '../../../server/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: undefined,
      password: undefined,
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
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
.Register {
  height: 100vh;
  width: 100vw;
  background-color: #E8D4ED;

.register__card {
  min-height: 65vh;
  max-width: 35vw;
  margin: 0 auto;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.register__card--title {
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #4d0f56;
}

.register__card--inputGroup input{
  outline: 1px solid #4d0f56;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 2vh 0;
  width: 25vw;
}

.register__card--inputGroup input:focus {
  outline: 1px solid #4d0f56;
}

.register__error {
  color: #c90000;
  font-style: italic;
  font-size: 0.85rem;
}

.register__card--button {
  margin: 2rem 0;
  width: 15vw;
  border-radius: 2rem;
  background-color: #4d0f56 !important;
  color: white;
}
}
</style>
