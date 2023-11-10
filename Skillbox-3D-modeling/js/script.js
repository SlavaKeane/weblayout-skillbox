window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
    })
  
    document.querySelector('.burger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    document.body.classList.toggle('open-menu')
  });
  });
  
  function open() {
    document.getElementById("burger").style.display = "block";
  }
  
  function close() {
    document.getElementById("burger").style.display = "none";
  }
  