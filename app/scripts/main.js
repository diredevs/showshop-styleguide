'use strict';

$('document').ready(function () {

  $('.card-display').on('click', function (event) {
    event.preventDefault();
    $('#' + $(this).toggleClass('active').data('productDetail')).stop().slideToggle();
    event.stopPropagation();
  });

  $('.toggle-cart').on('click', function (event) {
    event.preventDefault();
    $('#cart').toggle();
    $('.cart-shadow').fadeToggle();
  });

  $('.toggle-cart-2').on('click', function (event) {
    event.preventDefault();
    $('#cart2').toggle();
    $('.cart-shadow2').fadeToggle();
  });

  $('.toggle-help').on('click', function (event) {
    event.preventDefault();
    console.log('Hello');
    $('.label-store').popover('toggle');
  });

});
