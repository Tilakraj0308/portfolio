// Back to top buttons

const backToTopBtn = document.getElementById('back-top-top-button')

function checkScroll(e) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = 'none'
  }
}

function debounce(func, wait, immediate) {
  let timeout
  return function () {
    let context = this,
      args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

backToTopBtn.addEventListener('click', function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

const optimizedCheckScroll = debounce(checkScroll, 250)

window.addEventListener('scroll', optimizedCheckScroll)
