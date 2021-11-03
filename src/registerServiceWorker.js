/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('Service: Ready to Cached!')
    },
    registered () {
      console.log('Service: Successfully Register for this Project!')
    },
    cached () {
      console.log('Service: All Content has been cached!, now you can still browsing event if there no internet connection!')
    },
    updatefound () {
      console.log('Service: New Content Detected!, Downloading for Offline use')
    },
    updated () {
      console.log('Service: New Content Updated!, Please refresh the page!')
    },
    offline () {
      console.log('Service: Disconnected from internet!, entering offline mode')
    },
    error (error) {
      console.error('Service: An error occurred when trying to register the service!\n', error)
    }
  })
}
