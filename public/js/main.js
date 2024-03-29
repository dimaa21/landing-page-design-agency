document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.header-top-logo').classList.add('animated');
    document.querySelector('.second-block').classList.add('animated');
    document.querySelector('.third-block').classList.add('animated');
    document.querySelector('.social').classList.add('animated');
    document.querySelector('.about-me').classList.add('animated');
  });
  
  function slowScroll(id) {
      $("html, body").animate({
          scrollTop: $(id).offset().top - 50
      }, 501);
      return false;
  }
  
  // Обробник подій, буде спрацьовувати при натисненні на нього
  $(".header-top-logo .menu").on("click", function() {
      if($("header-top-logo .mobile-menu").is(":visible"))
          $(this).html('<i class="fas fa-bars"></i>');
      else
          $(this).html('<i class="fas fa-times"></i>');
  
      $("header .mobile-menu").slideToggle();
  })
  
  // Скрол ефект при наведенні на певний блок
  const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true
  });
  
  sr.reveal(`.header-main, .about-me, .my-stack,
              .services, .project, .review, .form`, {
      interval: 200
  })
  