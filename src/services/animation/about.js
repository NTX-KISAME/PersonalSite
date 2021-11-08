import anime from 'animejs'

export default {
  /* Welcome Title */
  welcomeAnimation: (title, subtitle) => {
    anime({
      targets: subtitle,
      translateY: [{ value: 5.6 + 'rem', duration: 0 }, { value: 0, duration: 1240, delay: 1040 }],
      opacity: [{ value: 0.0, duration: 0 }, { value: 1.0, duration: 850, delay: 1040 }],
      easing: 'easeOutExpo'
    })
    anime({
      targets: title,
      translateY: [{ value: 5.6 + 'rem', duration: 0 }, { value: 0, duration: 1240, delay: 1540 }],
      opacity: [{ value: 0.0, duration: 0 }, { value: 1.0, duration: 850, delay: 1540 }],
      easing: 'easeOutExpo'
    })
  },
  /* Button Down Animation */
  buttonAnimation: (element) => {
    anime({
      targets: element,
      translateY: [{ value: 2.5 + 'rem', duration: 1350 }, { value: 0, duration: 1350 }],
      easing: 'easeOutExpo',
      delay: 750,
      loop: true
    })
  }
}
