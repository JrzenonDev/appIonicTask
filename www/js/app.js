// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// Variável recebe o módulo
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('mainController', function($scope, $ionicPopup){
    var tasks = new getTasks();

    $scope.lista = tasks.items;

    // Metodos
    $scope.showMarked = false;
    $scope.removeStatus = false;

    // Metodo local, nao esta ligado a view por isso nao usa $scope
    function getItem(item) {
        $scope.data = {};
        $scope.data.newTask = "";

        $ionicPopup.show({
            title: "Nova tarefa",
            scope: $scope,
            template: "<input type='text' placeholder='Tarefa' autofocus='true' data-ng-model='data.newTask'>",
            buttons: [
                {text: "Ok",
                 onTap: function(e) {
                    item.nome = $scope.data.newTask;
                    tasks.add(item);
                 }},
                {text: "Cancel"}
            ]
        });
    };

    $scope.onMarkTask = function(item) {
        console.log('passou');
        item.finalizada = !item.finalizada;
    };

    $scope.onHideItem = function(item) {
        return item.finalizada && !$scope.showMarked;
    };

    $scope.onItemAdd = function() {
        var item = {nome: "teste", finalizada: false};

        getItem(item);
    }

    $scope.onItemRemove = function(item) {
        tasks.remove(item);
    };

    $scope.onClickRemove = function() {
        $scope.removeStatus = !$scope.removeStatus;
    };
});