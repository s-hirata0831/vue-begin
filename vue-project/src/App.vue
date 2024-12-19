<script>
new Vue({
  el: "#app",
  data: {
    show: true
  }
});
</script>

<template>
  <h1>Hello KAG!</h1>
  <div id="app" v-if="show" class="panel">
  <p>エラーメッセージ表示時に便利かもしれません。</p>
  <button v-on:click="show = !show">
    <span>&times;</span> 閉じる
  </button>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
