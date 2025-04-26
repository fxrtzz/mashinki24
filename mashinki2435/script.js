const check = () => {
    document.querySelector('.checkbox-point').classList.toggle('checkbox-point-active');
    document.querySelector('.checkbox').classList.toggle('checkbox-active');
}
const check1 = () => {
    document.querySelector('#checkbox-point1').classList.toggle('checkbox-point-active');
    document.querySelector('#checkbox1').classList.toggle('checkbox-active');
}

const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  })