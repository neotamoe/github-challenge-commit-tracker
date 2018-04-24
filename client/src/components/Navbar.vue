<template>
<nav class="navbar">
  <div class="navbar-brand">
  </div>
  <div id="navbarExample" data-target="navMenu" class="navbar-menu">
    <div class="navbar-brand">
        <span class="navbar-item icon is-large"><i class="fab fa-github"></i></span>
    </div>
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
    name: 'Navbar'
}
</script>