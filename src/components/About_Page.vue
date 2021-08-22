<template>
  <!-- About Page -->
  <section class="hero is-fullheight" style="background-color: #3a4bb7">
    <div class="hero-video is-transparent">
      <img src="../assets/Backround/image/bg_92134687.jpg" style="filter: blur(2px)" alt="background">
      <video :class="{showVideoBackground: isVidBgLoad}" id="vidBg" src="../assets/Backround/OKKKK.mp4" autoplay loop muted aria-label="VidBackground"
             style="filter: blur(8px);"></video>
    </div>
    <!-- Navigation -->
    <div class="hero-head">
      <Navigationr></Navigationr>
    </div>
    <!-- About Body -->
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <!-- Me..!,Well technically not in real life -->
          <div class="column is-3">
            <div class="image" style="width: 250px; height: 250px; margin-left: 12rem">
              <img src="../assets/about/AWP_NEKO.png" class="is-rounded" alt="ntx">
            </div>
          </div>
          <!-- About Me -->
          <div class="column has-text-centered">
            <h1 class="title has-text-white">Hello There!, Welcome to My About Page!</h1>
            <h2 class="subtitle has-text-white mb-1">About Me:</h2>
            <p class="pr-3 pl-3 has-text-white">Hello!,who ever read this, My name is Diartana/Diar/Natsu.</p>
            <p class="pr-3 pl-3 has-text-white">I'm a 16 y/o Full-stack (Front-end & Back-end) Developer.</p>
            <p class="pr-3 pl-3 has-text-white">I live in Gianyar, Bali, Indonesia, I like to make something in my free time.</p>
            <p class="pr-3 pl-3 has-text-white">And My Favorite language is javascript,i like to learn something new!.</p>
            <p class="pr-3 pl-3 has-text-white">Currently iam learning C#,Golang and typescript (iam still bad at static type language).</p>
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
import Navigationr from "./Navigationr";

export default {
  name: "About_Page",
  components: {
    Navigationr
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