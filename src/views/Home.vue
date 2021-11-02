<template>
<div class="hero is-fullheight is-black">
  <div class="hero-head">
    <!-- Navigation -->
    <Navigationr/>
  </div>
  <!-- Background Stuff -->
  <div class="hero-video is-transparent" id="bg-container" ref="bg-containers">
    <img src="../assets/bgimg/welcome_bg.png" alt="welome_bg" class="bgimage" ref="bgimages">
  </div>
  <!-- Main Stuff -->
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <div ref="welcome" class="mb-5">
          <h1 class="has-text-white subtitle is-uppercase is-3">Natsu Personal Website</h1>
          <h1 class="has-text-white title is-uppercase" style="font-size: 45px">That's it!</h1>
          </div>
          <!-- Button -->
          <router-link to="/about" @mouseenter="bgEffectIn()" @mouseout="bgEffectOut()" class="button is-white is-outlined is-uppercase has-text-weight-semibold" id="readmore-btn">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
<webFooter/>
</template>

<script>
// @ is an alias to /src
import anime from 'animejs'
import Navigationr from '@/components/Navigationr'
import webFooter from '@/components/webFooter'

export default {
  name: 'Home',
  components: {
    Navigationr,
    webFooter
  },
  mounted () {
    anime({
      targets: this.$refs.welcome,
      translateY: [{ value: 100, duration: 0 }, { value: 0, duration: 1550 }],
      opacity: [{ value: 0.0, duration: 0 }, { value: 1.0, duration: 1550 }],
      easing: 'easeOutExpo'
    })
  },
  methods: {
    bgEffectIn () {
      anime({
        targets: this.$refs['bg-containers'],
        opacity: [{ value: 0.3, duration: 0 }, { value: 0.0265, duration: 650 }],
        easing: 'easeOutExpo'
      })
    },
    bgEffectOut () {
      anime({
        targets: this.$refs['bg-containers'],
        opacity: [{ value: 0.0265, duration: 0 }, { value: 0.3, duration: 650 }],
        easing: 'easeOutExpo'
      })
    }
  }
}
</script>
<style>
.bgimage {
  margin-top: -10%;
}
#bg-container {
  opacity: 0.3;
  animation: firstIn 1.65s ease;
}
@keyframes firstIn {
  0% {opacity: 0}
  50% {opacity: 0}
  100% {opacity: 0.3}
}
#readmore-btn:hover {
  box-shadow: 0 0 31px -7px rgba(255,255,255,0.75);
  -webkit-box-shadow: 0 0 31px -7px rgba(255,255,255,0.75);
  -moz-box-shadow: 0 0 31px -7px rgba(255,255,255,0.75);
}
#readmore-btn {
  animation: buttonIn 1.2s ease;
}
@keyframes buttonIn {
  0% {
    opacity: 0.0;
    transform: translateY(45%);
  }
  50% {
    opacity: 0.0;
    transform: translateY(45%);
  }
  100% {
    opacity: 1.0;
    transform: translateY(0);
  }
}
</style>
