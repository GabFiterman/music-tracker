<template>
  <div>
    <div class="box">a</div>
    <div class="box">b</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  height: 100vh;
  width: 10vw;
  background-color: blueviolet;
  outline: white 5px solid;
}
</style>
