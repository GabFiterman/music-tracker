<template>
  <div>
    <h1>Register</h1>

    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="email"
    />
    <br />
    <input
      type="text"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../../../server/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: undefined,
      password: undefined
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
};
</script>

<style scoped></style>
