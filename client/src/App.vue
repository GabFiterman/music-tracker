<template>
  <v-app id="app">
    <v-container fluid px-0 py-0>
      <Header v-if="showHeader" />
        <main :class="showHeader ? 'Header__margin__ajust' : ''">
          <router-view/>
        </main>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    showHeader () {
      const actualRoute = this.$route.name.toLowerCase()
      return actualRoute !== 'register' && actualRoute !== 'login'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #362c50;

  .Header__margin__ajust {
    margin-top: 10vh;
  }

  input {
    outline: 1px solid #4d0f56;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    width: 25vw;
  }

  input:focus {
    outline: 1px solid #E8D4ED;
  }
}

</style>
