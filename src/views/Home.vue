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
  <!-- Background Shape -->
  <img src="../assets/shape/home/Circle_Blue.png" id="shape1" alt="Circle_blue" ref="shape1">
  <img src="../assets/shape/home/Circle_Green.png" id="shape2" alt="Circle_Green" ref="shape2">
  <img src="../assets/shape/home/Line_blue.png" id="shape3" alt="Line_blue" ref="shape3">
  <img src="../assets/shape/home/Line_Green.png" id="shape4" alt="Line_Green" ref="shape4">
  <img src="../assets/shape/home/Line_Yellow.png" id="shape5" alt="Line_Yellow" ref="shape5">
  <img src="../assets/shape/home/Square_Blue.png" id="shape6" alt="Square_Blue" ref="shape6">
  <img src="../assets/shape/home/Square_Purple.png" id="shape7" alt="Square_Purple" ref="shape7">
  <img src="../assets/shape/home/Triangel_Green.png" id="shape8" alt="Triangel_Green" ref="shape8">
  <img src="../assets/shape/home/Triangel_Pink.png" id="shape9" alt="Triangel_Pink" ref="shape9">
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
import Navigationr from '@/components/Navigationr'
import webFooter from '@/components/webFooter'
import home from '@/services/animation/home'

export default {
  name: 'Home',
  components: {
    Navigationr,
    webFooter
  },
  mounted () {
    home.welcomeOpacity(this.$refs.welcome)
  },
  methods: {
    bgEffectIn () {
      home.bgEffectIn(this.$refs['bg-containers'])
      // Remove Hidden Attribute from Shape
      /*  Well if i Write Like This your eyes gonna bleeding
      this.$refs.shape1.removeAttribute('hidden')
      this.$refs.shape2.removeAttribute('hidden')
      this.$refs.shape3.removeAttribute('hidden')
      this.$refs.shape4.removeAttribute('hidden')
      this.$refs.shape5.removeAttribute('hidden')
      this.$refs.shape6.removeAttribute('hidden')
      this.$refs.shape7.removeAttribute('hidden')
      this.$refs.shape8.removeAttribute('hidden')
      this.$refs.shape9.removeAttribute('hidden')
       */

      // Maybe I Gonna Simplified this later
      home.shape1In(this.$refs.shape1)
      home.shape2In(this.$refs.shape2)
      home.shape3In(this.$refs.shape3)
      home.shape4In(this.$refs.shape4)
      home.shape5In(this.$refs.shape5)
      home.shape6In(this.$refs.shape6)
      home.shape7In(this.$refs.shape7)
      home.shape8In(this.$refs.shape8)
      home.shape9In(this.$refs.shape9)
    },
    bgEffectOut () {
      /* Don't Worry I will Rewrite this in the next commit
      *  So your eyes will not cry with blood */
      home.bgEffectOut(this.$refs['bg-containers'])
      home.shape1Out(this.$refs.shape1)
      home.shape2Out(this.$refs.shape2)
      home.shape3Out(this.$refs.shape3)
      home.shape4Out(this.$refs.shape4)
      home.shape5Out(this.$refs.shape5)
      home.shape6Out(this.$refs.shape6)
      home.shape7Out(this.$refs.shape7)
      home.shape8Out(this.$refs.shape8)
      home.shape9Out(this.$refs.shape9)
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
/* Home Shape */
#shape1 {
  position: absolute;
  top: 11.51rem;
  left: -116.25rem;
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 0 10px #1019C6BF);
}
#shape2 {
  position: absolute;
  top: 5.51rem;
  left: -80.25rem;
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 0 10px rgba(16, 128, 198, 0.75));
}
#shape3 {
  position: absolute;
  bottom: 1.40rem;
  right: -122.50rem;
  width: 560px;
  height: 25px;
  filter: drop-shadow(0 0 10px rgba(16, 165, 198, 0.75));
}
#shape4 {
  position: absolute;
  bottom: 3.40rem;
  right: -116.50rem;
  width: 560px;
  height: 25px;
  filter: drop-shadow(0 0 10px #12B637D3);
}
#shape5 {
  position: absolute;
  bottom: 5.40rem;
  right: -120.50rem;
  width: 560px;
  height: 25px;
  filter: drop-shadow(0 0 10px #F3E00CF4);
}
#shape6 {
  position: absolute;
  right: -127.25rem;
  top: 5.51rem;
  width: 45px;
  height: 45px;
  filter: drop-shadow(0 0 10px #0DB7DCBF);
}
#shape7 {
  position: absolute;
  right: -116.25rem;
  top: 11.51rem;
  width: 55px;
  height: 55px;
  filter: drop-shadow(0 0 10px #C90DE0D2);
}
#shape8 {
  position: absolute;
  bottom: 4.25rem;
  left: -128.55rem;
  width: 55px;
  height: 55px;
  filter: drop-shadow(0 0 10px #1AE862E8);
}
#shape9 {
  position: absolute;
  bottom: 8.25rem;
  left: -115.55rem;
  width: 55px;
  height: 55px;
  filter: drop-shadow(0 0 10px #CF0DE7E8);
}
</style>
