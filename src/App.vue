<template>
  <div class="bg-neutral-200 min-h-[100vh]">
    <div class="mx-8 my-2">
    <h2 class="title">Vue-Begin</h2>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/anti_virus">AntiVirus</router-link> |
      <router-link to="/torigai">Torigai</router-link>
    </nav>
    <RouterView />
    </div>
  </div>
</template>

<style scoped>
.title{
  color: green;
  font-size: 30px;
}
nav {
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
</style>