window.addEventListener('scroll', function () {
  let nav = this.document.querySelector('nav')

  nav.classList.toggle('sticky-nav', window.scrollY > 0)

})