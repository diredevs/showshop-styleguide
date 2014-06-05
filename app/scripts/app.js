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
       when('/sobre', {
        templateUrl: 'about.html',
        controller: 'AboutController'
      }).
      when( '/lojas', {
        templateUrl: 'stores.html'//,
        //controller: 'LojasController'
        }).
      when( '/leiloes', {
        templateUrl: 'auctions.html',
        controller: 'AuctionController'
       }).
      when( '/pedidos', {
        templateUrl: 'orders.html',
        controller: 'OrdersController'
       }).
      when( '/conta', {
        templateUrl: 'account.html',
        controller: 'AccountController'
       }).
      otherwise( { redirectTo: '/' } );
  })

  .controller('IndexController', function ($scope) {
    var stores = [
      { features: 'MENOR PREÇO', price: 1500 ,title: 'Submarino', color: '#5396e1'},
      { price: 1700 ,title: 'Americanas', color: '#ef1515'},
      { features: 'MAIOR PARCELAMENTO', price: 1650.99 ,title: 'Sony Store', color: '#000000'}
    ];
    var storesSet2 = [
      { features: 'MAIOR PARCELAMENTO', price: 2300.50 ,title: 'Shoptime', color: '#e37e53'},
      { price: 2100.00 ,title: 'Kabum', color: '#138df1'},
      { features: 'MAIS VENDIDO', price: 1650.99 ,title: 'Nagem', color: '#3262f4'},
      { price: 1650.99 ,title: 'Miranda', color: '#9d9d9d'},
      {features: 'CHEGA MAIS RÁPIDO ATÉ VOCÊ', price: 1650.99 ,title: 'Wallmart', color: '#307afb'}
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
        description: "Desfrute de uma experiência incrível com elementos gráficos de encher os olhos, alta velocidade e personalização inteligente com um dos consoles mais completos do mercado. O PlayStation 4 é mais que um videogame. Esse aparelho oferece total integração com as redes sociais e recursos de segunda tela inteligentes e dinâmicos."
      },
      {
        title: 'Microsoft XBOX One',
        lowerPrice: 1700.99,
        higherPrice: 2600.00,
        foundIn: 30,
        stores: storesSet2,
        image: '../imgs/002.jpg',
        small_img_1: '../imgs/002_1.jpg',
        description: "Simples. Instantâneo. Completo. Leve mais diversão e entretenimento para toda a família com o XBOX ONE. Além de um console de jogos de última geração, o XBOX ONE permite que você tenha acesso aos seus filmes, jogos e músicas favoritas sem precisar mudar as entradas na sua TV. Você pode gerenciar todas essas funções apenas com o comando da sua voz."
      },
      {
        title: 'Nintendo Wii U',
        lowerPrice: 2000.00,
        higherPrice: 2750.00,
        foundIn: 50,
        stores: stores,
        image: '../imgs/003.jpg',
        small_img_1: '../imgs/003_1.jpg',
        description: 'O novo console da Nintendo! Jogos, experiências e possibilidades sensacionais! Descubra um novo e excitante modo de entretenimento com o Nintendo Wii U. Uma experiência revolucionária e novas formas de jogar com o inovador Wii U GamePad. Aproveite melhores jogos novos das suas franquias favoritas. Jogue em até 1080p HD pela primeira vez em um console de videogame Nintendo. '
      },
      {
        title: 'Macbook Pro Retina 13',
        lowerPrice: 6000.00,
        higherPrice: 8500.00,
        foundIn: 78,
        stores: stores,
        image: '../imgs/004.jpg',
        small_img_1: '../imgs/004_1.jpg',
        description: 'Com processador Intel Core i5, 8GB de memória, 256GB FLASH de HD tela de 13.3" e o moderno Sistema Operacional OS X Mavericks, o MacBook Pro Retina é o aparelho ideal para quem busca desempenho, tecnologia e praticidade.'
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
