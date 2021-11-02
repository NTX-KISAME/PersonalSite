<template>
  <!-- Rewrite Navigation -->
  <div class="navbar is-fixed-top is-black" role="navigation" ref="navbar">
    <div class="container mt-4">
      <!-- Site Name -->
      <div class="navbar-brand">
        <div class="navbar-item">
          <h1 class="has-text-weight-bold is-uppercase" style="font-size: 24px" >Natsu-X</h1>
        </div>
      </div>
      <!-- Site Menu -->
      <div class="navbar-menu">
        <!-- About -->
        <div class="navbar-item ml-6">
          <router-link to="/about" class="is-uppercase has-text-white link"><i class="fas fa-user-circle"></i> About</router-link>
        </div>
        <!-- Projects -->
        <div class="navbar-item ml-2">
          <router-link to="/project" class="is-uppercase has-text-white link"><i class="fas fa-project-diagram"></i> Project</router-link>
        </div>
        <!-- My Repository -->
        <div class="navbar-item ml-2">
          <router-link to="/repository" class="is-uppercase has-text-white link"><i class="fas fa-book"></i> Repository</router-link>
        </div>
      </div>
      <!-- Right Menu -->
      <div class="navbar-end">
        <!-- Twitter -->
        <div class="navbar-item link">
          <a href="//twitter.com/NTXKIANA" class="has-text-white"><i class="fab fa-twitter"></i></a>
        </div>
        <!-- GitHub -->
        <div class="navbar-item link">
          <a href="//github.com/NatsuNTX" class="has-text-white"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'Navigation Bar',
  mounted () {
    anime({
      targets: this.$refs.navbar,
      translateY: [{ value: -100, duration: 0 }, { value: 0, duration: 1200 }],
      easing: 'easeOutExpo'
    })
  }
}
</script>

<style>
.link:hover {
  text-shadow: 0 0 4px rgb(255, 255, 255);
  transform: scale(1.10);
}
</style>
