<template>
<nav class="navbar">
  <div class="navbar-brand">
  </div>
  <div id="navbarExample" data-target="navMenu" class="navbar-menu">
    <div class="navbar-brand">
        <span class="navbar-item icon is-large"><i class="fab fa-github"></i></span>
    </div>
    <div class="navbar-start">
      <router-link class="navbar-item" to="/home">
        Home
      </router-link>
      <router-link class="navbar-item" to="/posts">
        Posts
      </router-link>
      <router-link class="navbar-item" to="/current">
        Current Challenge
      </router-link>
      <router-link class="navbar-item" to="/add">
        Add a Challenge
      </router-link>
     <router-link class="navbar-item" to="/past">
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