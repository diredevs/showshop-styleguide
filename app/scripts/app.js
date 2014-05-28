// global: angular
'use strict';

angular
  .module('showshop', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexController'
      });
  })

  .controller('IndexController', function ($scope) {
    $scope.products = [
      {
        title: 'Sony Playstation 4',
        lowerPrice: 3900.99,
        higherPrice: 4100.00,
        foundIn: 180,
        detail: false
      },
      {
        title: 'Microsoft XBOX One',
        lowerPrice: 1700.99,
        higherPrice: 2600.00,
        foundIn: 30
      },
      {
        title: 'Nintendo Wii U',
        lowerPrice: 2000.00,
        higherPrice: 2750.00,
        foundIn: 50
      },
      {
        title: 'Macbook Pro Retina 13"',
        lowerPrice: 6000.00,
        higherPrice: 8500.00,
        foundIn: 78
      }
    ];

    $scope.toggleDetails = function (index) {
      var detail = $scope.products[index].detail;
      if (detail) {
        $scope.products[index].detail = false;
      } else {
        $scope.products[index].detail = true;
      }
      console.log($scope.products[index]);
    };
  })
  ;
