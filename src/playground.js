let counter = 0
const interval = setInterval(() => {
  counter++

  if (counter > 5) {
    clearInterval(interval)
  }
  console.log('Hello')
}, 2000)
