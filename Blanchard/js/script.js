// burger
let burger = document.querySelector('#burger')
let menu = document.querySelector('#burgerNav')
let menulinks = menu.querySelectorAll('.burgerNav__link')
let menuexit = menu.querySelector('#burgerNav__exit')

burger.addEventListener('click',
  function () {
    menu.classList.toggle('burger-nav');
  })

menuexit.addEventListener('click',
  function () {
    menu.classList.remove('burger-nav');
  })

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {

    menu.classList.remove('burger-nav');
  })

})