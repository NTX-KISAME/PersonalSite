<template>
  <!-- Rewrite Navigation -->
  <!-- PC -->
  <div class="navbar is-fixed-top is-black" id="pc-navbar" role="navigation" ref="navbar">
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
  <!-- Mobile -->
  <div class="navbar is-black" id="mobile-nav" ref="nav-mobile">
    <div class="navbar-brand">
      <div class="navbar-item">
        <p class="has-text-weight-semibold is-uppercase" style="font-size: 17px">Natsu-X</p>
      </div>
      <!-- Menu Button -->
      <button class="navbar-burger" @click="openAndCloseMenu()" ref="menu_btn_m">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div class="mobile-menu" ref="navbar_m_menu" hidden>
    <div class="menu-wrapper">
      <!-- About -->
      <div class="menu-item">
        <router-link to="/about" class="has-text-white is-uppercase menu-text"><i class="fas fa-user-circle"></i> About</router-link>
        <span class="line"></span>
      </div>
      <!-- project -->
      <div class="menu-item">
        <router-link to="/project" class="has-text-white is-uppercase menu-text"><i class="fas fa-project-diagram"></i> Project</router-link>
        <span class="line"></span>
      </div>
      <!-- repository -->
      <div class="menu-item">
        <router-link to="/repository" class="has-text-white is-uppercase menu-text"><i class="fas fa-book"></i> Repository</router-link>
        <span class="line"></span>
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
    anime({
      targets: this.$refs['nav-mobile'],
      translateY: [{ value: -100, duration: 0 }, { value: 0, duration: 1200 }],
      easing: 'easeOutExpo'
    })
  },
  methods: {
    openAndCloseMenu () {
      if (!this.$refs.menu_btn_m.classList.contains('is-active')) {
        // Add is-active class to menu Button
        this.$refs.menu_btn_m.classList.add('is-active')
        // Remove Hidden Attribute from Menu Box
        this.$refs.navbar_m_menu.hidden = false
        anime({
          targets: this.$refs.navbar_m_menu,
          right: 0 + 'rem',
          duration: 650,
          easing: 'easeOutExpo'
        })
      } else {
        this.$refs.menu_btn_m.classList.remove('is-active')
        anime({
          targets: this.$refs.navbar_m_menu,
          right: -100 + 'rem',
          duration: 650,
          easing: 'easeInExpo',
          complete: () => {
            this.$refs.navbar_m_menu.hidden = true
          }
        })
      }
    }
  }
}
</script>

<style>
#mobile-nav {
  position: absolute;
  width: 100vw;
}
.mobile-menu {
  padding: 5.10rem;
  position: absolute;
  z-index: 1;
  width: 100vw;
  right: -100rem;
  height: 100vh;
  background-color: black;
}
.menu-text {
  font-size: 1.20rem;
}
.line {
  display: block;
  width: 10.10rem;
  margin-top: 0.30rem;
  height: 2px;
  background-color: white;
}
.menu-wrapper {
  margin-top: 5.10rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 2.5rem;
}
.menu-item {
  padding-top: 1.60rem;
  padding-bottom: 0.50rem;
}
.link:hover {
  text-shadow: 0 0 4px rgb(255, 255, 255);
  transform: scale(1.10);
}
@media screen and (max-width: 1024px) {
  #pc-navbar {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  #mobile-nav {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
