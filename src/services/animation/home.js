import anime from 'animejs'

export default {
  bgEffectIn (element) {
    anime({
      targets: element,
      opacity: [{ value: 0.3, duration: 0 }, { value: 0.0265, duration: 650 }],
      easing: 'easeOutExpo'
    })
  },
  bgEffectOut (element) {
    anime({
      targets: element,
      opacity: [{ value: 0.0265, duration: 0 }, { value: 0.3, duration: 650 }],
      easing: 'easeInExpo'
    })
  },
  welcomeOpacity (element) {
    anime({
      targets: element,
      translateY: [{ value: 100, duration: 0 }, { value: 0, duration: 1550 }],
      opacity: [{ value: 0.0, duration: 0 }, { value: 1.0, duration: 1550 }],
      easing: 'easeOutExpo'
    })
  },
  /* Shape Animation (In) */
  // Blue Circle
  shape1In (element) {
    anime({
      targets: element,
      left: 16.25 + 'rem',
      duration: 650,
      easing: 'easeOutExpo'
    })
  },
  // Green Circle
  shape2In (element) {
    anime({
      targets: element,
      left: 8.25 + 'rem',
      duration: 650,
      delay: 120,
      easing: 'easeOutExpo'
    })
  },
  // Line Blue
  shape3In (element) {
    anime({
      targets: element,
      right: -2.50 + 'rem',
      duration: 650,
      easing: 'easeOutExpo'
    })
  },
  // Line Green
  shape4In (element) {
    anime({
      targets: element,
      right: -6.50 + 'rem',
      duration: 650,
      delay: 120,
      easing: 'easeOutExpo'
    })
  },
  // Line Yellow
  shape5In (element) {
    anime({
      targets: element,
      right: -10.50 + 'rem',
      duration: 650,
      delay: 180,
      easing: 'easeOutExpo'
    })
  },
  // Square Blue
  shape6In (element) {
    anime({
      targets: element,
      right: 7.25 + 'rem',
      duration: 650,
      easing: 'easeOutExpo'
    })
  },
  // Square Purple
  shape7In (element) {
    anime({
      targets: element,
      right: 16.25 + 'rem',
      duration: 650,
      delay: 120,
      easing: 'easeOutExpo'
    })
  },
  // Triangle Green
  shape8In (element) {
    anime({
      targets: element,
      left: 8.55 + 'rem',
      rotate: 180,
      duration: 650,
      easing: 'easeOutExpo'
    })
  },
  // triangle Pink
  shape9In (element) {
    anime({
      targets: element,
      left: 15.55 + 'rem',
      rotate: 180,
      duration: 650,
      delay: 120,
      easing: 'easeOutExpo'
    })
  },
  /* Shape Animation (Out) */
  // Blue Circle
  shape1Out (element) {
    anime({
      targets: element,
      left: -116.25 + 'rem',
      duration: 650,
      easing: 'easeInExpo'
    })
  },
  // Green Circle
  shape2Out (element) {
    anime({
      targets: element,
      left: -118.25 + 'rem',
      duration: 650,
      delay: 120,
      easing: 'easeInExpo'
    })
  },
  // Line Blue
  shape3Out (element) {
    anime({
      targets: element,
      right: -112.50 + 'rem',
      duration: 650,
      easing: 'easeInExpo'
    })
  },
  // Line Green
  shape4Out (element) {
    anime({
      targets: element,
      right: -116.50 + 'rem',
      duration: 650,
      delay: 120,
      easing: 'easeInExpo'
    })
  },
  // Line Yellow
  shape5Out (element) {
    anime({
      targets: element,
      right: -110.50 + 'rem',
      duration: 650,
      delay: 180,
      easing: 'easeInExpo'
    })
  },
  // Square Blue
  shape6Out (element) {
    anime({
      targets: element,
      right: -117.25 + 'rem',
      duration: 650,
      easing: 'easeInExpo'
    })
  },
  // Square Purple
  shape7Out (element) {
    anime({
      targets: element,
      right: -116.25 + 'rem',
      duration: 650,
      delay: 120,
      easing: 'easeInExpo'
    })
  },
  // Triangle Green
  shape8Out (element) {
    anime({
      targets: element,
      left: -118.55 + 'rem',
      rotate: 180,
      duration: 650,
      easing: 'easeInExpo'
    })
  },
  // triangle Pink
  shape9Out (element) {
    anime({
      targets: element,
      left: -115.55 + 'rem',
      rotate: 180,
      duration: 650,
      delay: 120,
      easing: 'easeInExpo'
    })
  }
}
