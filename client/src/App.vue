<template>
  <div id="app">
    <section class="hero is-primary">

      <TrackerManager />
      <Navbar />
    </section>
    <router-view />

  </div>
</template>


<script>

import TrackerManager from './components/TrackerManager.vue'
import Navbar from './components/Navbar.vue'
import DateRange from './components/DateRange.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import Home from './components/Home.vue'
import AddChallenge from './components/AddChallenge.vue'
import Posts from './components/Posts.vue'

export default {
  name: 'app',
  components: {
    TrackerManager,
    Navbar,
    DateRange,
    Tabs,
    Tab,
    Home,
    AddChallenge,
    Posts
  }
}
</script>

<style>

</style>
