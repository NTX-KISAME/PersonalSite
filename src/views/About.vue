<template>
  <!-- About Page Section1 (title) -->
<section class="hero is-fullheight is-black" aria-label="About Welcome">
  <div class="hero-head">
    <Navigationr/>
  </div>
  <div class="hero-video" id="bg_container">
    <img src="../assets/bgimg/about_bg.jpg" alt="about_bg_image">
  </div>
  <!-- Welcome About Content -->
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <div class="aboutIn">
            <h4 class="subtitle has-text-white is-uppercase is-4" ref="subtitle">Who am i ?</h4>
            <h1 class="title has-text-white is-uppercase is-2" ref="title">Scroll down to know a little bit about me</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Button to Next Slide -->
    <div class="btn-next-container">
      <button @click="goToNextSection()" id="next-btn" class="has-text-white" ref="next">
        <i class="fas fa-chevron-down" style="font-size: 1.5rem"></i>
      </button>
    </div>
  </div>
</section>
<!-- About Page Section2 (main Content) -->
<section class="hero is-fullheight is-black" ref="sec2" aria-label="about main content">
  <div class="hero-body">
    <div v-show="activatedSection" class="container">
      <h1 class="title has-text-white has-text-weight-semibold is-uppercase is-3" id="subtitle" ref="about_title">Hi, I'm Natsu!</h1>
      <div id="textbox" ref="about_text">
      <p class="subtitle has-text-white is-uppercase is-6 mb-0">I'm a 16 y/o Full-stack (Front-end & Back-end) Developer.</p>
      <p class="subtitle has-text-white is-uppercase is-6 mb-0">I live in Gianyar, Bali, Indonesia, I like to make something "random" in my free time.</p>
      <p class="subtitle has-text-white is-uppercase is-6 mb-0">And My Favorite language is javascript,i like to learn something new!.</p>
      <p class="subtitle has-text-white is-uppercase is-6 mb-0">Currently iam learning C#,Golang,Kotlin and typescript (iam still bad at static type language).</p>
      </div>
    </div>
  </div>
</section>
<!-- Footer -->
<webFooter/>
</template>

<style>
#textbox {
  position: absolute;
  top: -2.5rem;
}
#subtitle {
  position: absolute;
  top: -5.5rem;
}
#bg_container {
  opacity: 0.3;
  animation: imageIn 1.950s ease;
}
/* Time to do extra work */
.btn-next-container {
  position: absolute;
  height: 4.5rem;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  left: 0;
}
#next-btn {
  top: -1.5rem;
  cursor: pointer;
  position: relative;
  height: 2.5rem;
  width: 4.5rem;
  bottom: 0;
  border: none;
  background-color: transparent;
  animation: buttonIn 0.850s ease;
}
@keyframes buttonIn {
  0% {
    opacity: 0.0;
    transform: translateY(2.5rem);
  }
  50% {
    opacity: 0.0;
    transform: translateY(2.5rem);
  }
  100% {
    opacity: 1.0;
    transform: translateY(0);
  }
}

@keyframes imageIn {
  0% {
    opacity: 0.0
  }
  50% {
    opacity: 0.0
  }
  100% {
    opacity: 0.3
  }
}
</style>

<script>
import Navigationr from '@/components/Navigationr'
import about from '@/services/animation/about'
import webFooter from '@/components/webFooter'

/* For Testing */
import anime from 'animejs'

export default {
  name: 'About Dev',
  components: {
    Navigationr,
    webFooter
  },
  data () {
    return {
      scrollPosition: 0, // Default Value
      sectionIsShown: false // Default set
    }
  },
  mounted () {
    this.getScrollPosition()
    about.welcomeAnimation(this.$refs.title, this.$refs.subtitle)
    about.buttonAnimation(this.$refs.next)
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    activatedSection () {
      if (this.sectionIsShown) {
        this.runAnimation()
        return true
      }
    }
  },
  methods: {
    getScrollPosition () {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 712) {
          this.sectionIsShown = true
        }
      })
    },
    runAnimation () {
      /* About Title */
      anime({
        targets: this.$refs.about_title,
        translateY: [{ value: 8.5 + 'rem', duration: 0 }, { value: 0 + 'rem', duration: 1650 }],
        opacity: [{ value: 0.0, duration: 0 }, { value: 1.0, duration: 1650 }],
        delay: 550,
        easing: 'easeOutQuart'
      })
      /* About Main Content */
      anime({
        targets: this.$refs.about_text,
        translateY: [{ value: 8.5 + 'rem', duration: 0 }, { value: 0 + 'rem', duration: 1650 }],
        opacity: [{ value: 0.0, duration: 0 }, { value: 1.0, duration: 1650 }],
        delay: 750,
        easing: 'easeOutQuart'
      })
    },
    goToNextSection () {
      window.scrollTo({
        left: 0,
        top: 740,
        behavior: 'smooth'
      })
    }
  }
}
</script>
