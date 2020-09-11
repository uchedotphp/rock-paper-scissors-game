<template>
  <div
    id="app"
    class="bg-gradient-to-br from-radialGradientOne to-radialGradientTwo"
  >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Barlow Semi Condensed", sans-serif;
}
</style>
