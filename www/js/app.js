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

app.controller('mainController', function($scope, $ionicPopup, $ionicListDelegate){
    var tasks = new getTasks();

    $scope.lista = tasks.items;

    // Metodos
    $scope.showMarked = false;
    $scope.removeStatus = false;

    // Metodo local, nao esta ligado a view por isso nao usa $scope
    function getItem(item, novo, title) {
        $scope.data = {};
        $scope.data.newTask = item.nome;

        $ionicPopup.show({
            title: title,
            scope: $scope,
            template: "<input type='text' placeholder='Tarefa' autofocus='true' data-ng-model='data.newTask'>",
            buttons: [
                {text: "Ok",
                 onTap: function(e) {
                    item.nome = $scope.data.newTask;
                    if(novo) {
                        tasks.add(item);
                    }
                    tasks.save();
                 }},
                {text: "Cancel"}
            ]
        });

        $ionicListDelegate.closeOptionButtons();
    };

    $scope.onMarkTask = function(item) {
        //console.log('passou');
        item.finalizada = !item.finalizada;
        tasks.save();
    };

    $scope.onHideItem = function(item) {
        return item.finalizada && !$scope.showMarked;
    };

    $scope.onItemAdd = function(item) {
        var item = {nome: "", finalizada: false};
        title = "Nova tarefa";
        getItem(item, true, title);

    };

    $scope.onItemEdit = function(item) {
        title = "Editar tarefa";
        getItem(item, false, title);
    };

    $scope.onItemRemove = function(item) {
        tasks.remove(item);
        tasks.save();
    };

    $scope.onClickRemove = function() {
        $scope.removeStatus = !$scope.removeStatus;
    };
});