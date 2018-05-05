<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item icon is-large"><i class="fab fa-github"></i></span>
        <a class="navbar-burger" data-target="navbarMenu" aria-label="menu" aria-expanded="false" @click="toggleBurger()">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
        <router-link class="navbar-item" to="/posts">
          Posts
        </router-link>
        <router-link class="navbar-item" to="/challenges/current">
          Current Challenge
        </router-link>
        <router-link class="navbar-item" to="/challenges/add">
          Add a Challenge
        </router-link>
        <router-link class="navbar-item" to="/participants/add">
          Add Participants
        </router-link>
        <router-link class="navbar-item" to="/challenges/past">
          Past Challenges
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
      toggleBurger() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
      } 
    }
}
</script>

<style>
a.navbar-item {
  text-align: right
}
</style>