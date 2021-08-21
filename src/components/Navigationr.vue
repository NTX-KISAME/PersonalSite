<template>
  <div id="navigation" class="navbar is-fixed-top is-transparent is-spaced is-dark">
    <!-- I Don't Have Logo, For Now I Just Use Text -->
    <div class="navbar-brand">
      <div class="navbar-item">
        <h1 class="is-8 has-text-weight-bold">NatsuX</h1>
      </div>
      <div class="navbar-burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
    <!-- Navigation Menu -->
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <i class="fas fa-home"></i>
          <h1 class="ml-2">Home</h1>
        </div>
        <div class="navbar-item">
          <i class="fas fa-address-card"></i>
          <h1 class="ml-2">About</h1>
        </div>
        <div class="navbar-item">
          <i class="fas fa-project-diagram"></i>
          <h1 class="ml-2">Project</h1>
        </div>
        <div class="navbar-item">
          <i class="fas fa-book"></i>
          <h1 class="ml-2">My Repository</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation Bar",
  mounted() {
    /* Change Navbar Background When User Scrolling the Pages */
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        let navbar = document.getElementById("navigation");
        if(document.documentElement.scrollTop > 50) {
          navbar.style.backgroundColor = "black";
        } else if(document.documentElement.scrollTop < 50) {
          navbar.style.backgroundColor = "transparent";
        }
      });
    });
  }
}
</script>

<style scoped>
</style>