<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tabMenu">TabMenu</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
}
</style>