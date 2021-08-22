<template>
  <section id="mainpage" class="hero is-fullheight is-primary">
    <!-- Background -->
    <div class="hero-video is-transparent">
      <img src="../assets/Backround/image/BA_Shiroko.jpg" style="filter: blur(2px)" alt="background image">
      <video :class="{showVideoBackground: isVidBgLoad}" id="vidBg" src="../assets/Backround/GOBO.v2.mp4" autoplay muted loop style="filter: blur(8px)"></video>
    </div>
    <!-- Navigation Bar -->
    <div class="hero-head">
    <Navigation></Navigation>
    </div>
    <!-- Home Content -->
    <div class="hero-body">
      <!-- Another Container -->
      <div class="container">
        <div class="columns is-vcentered">
          <!-- Title Column -->
          <div class="column">
            <h1 class="title">NatsuX Personal Website</h1>
            <h2 class="subtitle">My Personal Site...,That's it!</h2>
            <router-link to="/about">
              <button class="button is-white is-outlined has-text-weight-bold is-size-5">About Me</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="footer has-background-black">
    <!-- Content Container -->
    <div class="content is-black">
      <div class="container is-three-fifths">
        <section class="section has-text-centered">
          <p class="has-text-weight-bold has-text-white">Develop and Maintained by Natsu</p>
          <br>
          <!-- Social Media -->
          <a class="has-text-white mr-2 is-size-4" href="//github.com/NatsuNTX/"><i class="fab fa-github"></i></a>
          <a class="has-text-white mr-2 is-size-4" href="//twitter.com/NTXKIANA"><i class="fab fa-twitter"></i></a>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from './Navigationr'

export default {
  name: "homePage",
  components: {
    Navigation
  },
  data() {
    return {
      isVidBgLoad: false
    }
  },
  mounted() {
    const vidElement = document.getElementById('vidBg');
    vidElement.addEventListener('loadeddata', () => {
      if(vidElement.readyState > 3) {
        this.isVidBgLoad = true
      }
    });
  }
}
</script>

<style scoped>
.showVideoBackground {
  animation: vidBgOpa 3.45s ease forwards;
}
@keyframes vidBgOpa {
  0% {opacity: 0}
  50% {opacity: 0}
  100% {opacity: 100}
}
</style>