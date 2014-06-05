// global: angular
'use strict';

var shop = angular
  .module('showshop', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'products.html',
        controller: 'IndexController'
      }).
      when( '/lojas', {
        templateUrl: 'stores.html'//,
        //controller: 'LojasController'
        }).
      when( '/leiloes', {
        templateUrl: 'auctions.html',
        controller: 'AuctionController'
       }).
      otherwise( { redirectTo: '/' } );
  })

  .controller('IndexController', function ($scope) {
    var stores = [
      { features: 'menor preço', price: 1500 ,title: 'Submarino', color: '#5396e1'},
      { price: 1700 ,title: 'Americanas', color: '#ef1515'},
      { features: 'maior parcelamento, aceita cartão', price: 1650.99 ,title: 'Sony Store', color: '#000000'}
    ];
    var storesSet2 = [
      { price: 2300.50 ,title: 'Shoptime', color: '#e37e53'},
      { price: 2100.00 ,title: 'Kabum', color: '#138df1'},
      { price: 1650.99 ,title: 'Nagem', color: '#3262f4'},
      { price: 1650.99 ,title: 'Miranda', color: '#9d9d9d'},
      { price: 1650.99 ,title: 'Wallmart', color: '#307afb'}
    ];

    $scope.extractFeature = function(features) {
      var result = '';
      features.map(function (feature) {
        result += feature;
      });
      return result;
    };

    $scope.products = [
      {
        title: 'Sony Playstation 4',
        lowerPrice: 3900.99,
        higherPrice: 4100.00,
        foundIn: 180,
        detail: false,
        stores: stores,
        image: '../imgs/001.jpg',
        small_img_1: '../imgs/001_1.jpg',
        small_img_2: '../imgs/001_2.jpg',
        small_img_3: '../imgs/001_3.jpg',
        small_img_4: '../imgs/001_4.jpg'
      },
      {
        title: 'Microsoft XBOX One',
        lowerPrice: 1700.99,
        higherPrice: 2600.00,
        foundIn: 30,
        stores: storesSet2
      },
      {
        title: 'Nintendo Wii U',
        lowerPrice: 2000.00,
        higherPrice: 2750.00,
        foundIn: 50,
        stores: stores
      },
      {
        title: 'Macbook Pro Retina 13"',
        lowerPrice: 6000.00,
        higherPrice: 8500.00,
        foundIn: 78,
        stores: stores
      }
    ];

    $scope.toggleDetails = function (index) {
      var detail = $scope.products[index].detail;
      if (detail) {
        $scope.selected = null;
        $scope.products[index].detail = false;
      } else {
        $scope.selected = $scope.products[index];
        $scope.products[index].detail = true;
      }
      console.log($scope.products[index]);
    };
  });

//   .config( function ( $routeProvider ) {
//   $routeProvider
//   .when( '/', {
//         templateUrl: 'index.html'//,
//         // controller: 'IndexController'//
//     })
//   .when( '/lojas', {
//         templateUrl: 'stores.html'//,
//         //controller: 'LojasController'
//     })
//   .when( '/leiloes', {
//    templateUrl: 'auctions.html'//,
//    //controller: 'LeiloesController'
//    })
//   .otherwise( { redirectTo: '/' } );
// });
