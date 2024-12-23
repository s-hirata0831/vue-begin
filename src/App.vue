<template>
  <div>
    <h2 class="title">Vue-Begin</h2>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/anti_virus">AntiVirus</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.title{
  padding-bottom: 0;
  margin-bottom: 0;
  color: green;
}
nav {
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
</style>