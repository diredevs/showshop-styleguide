'use strict';

$('document').ready(function () {
  $('.card-display').on('click', function (event) {
    event.preventDefault();
    $('#' + $(this).toggleClass('active').data('productDetail')).stop().slideToggle();
    event.stopPropagation();
  });
});
