'use strict';

$('document').ready(function () {
  $('.card-display').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    var target = $(this).data('productDetail');
    target = '#' + target;
    console.log(target);
    $(target).slideToggle();
  });
});
