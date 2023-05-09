<template>
  <v-toolbar elevation="1" class="Header purple darken-3 white--text">
    <v-toolbar-title>
      <router-link to="/" class="Header__logo"> Music tracker </router-link>
    </v-toolbar-title>

    <v-toolbar-items style="margin-left: 2vw">
      <v-btn elevation="0" class="Header__button" dark> Browse </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn elevation="0" class="Header__button" dark>
        <router-link to="/login"> Login </router-link>
      </v-btn>

      <v-btn elevation="0" class="Header__button" dark>
        <router-link to="/register"> Sign Up </router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.Header {
  position: fixed;
  width: 100vw;

  .Header__logo:hover {
    cursor: pointer;
    color: #f7a1db;
  }

  .Header__button {
    background-color: #ffffff00 !important;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
}
</style>
