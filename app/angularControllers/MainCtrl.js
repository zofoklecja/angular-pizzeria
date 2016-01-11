angular.module('pizzeria').controller('MainController', function($scope, $state, $stateParams, $http){
    /*$scope.menu=[
    {
        id: 1,
        name: 'Margherita',
        ingredients: ['Sos', 'Ser'],
        price: 14.90
    },
    {
        id: 2,
        name: 'Funghi ',
        ingredients: ['Sos', 'Ser', 'Pieczarki'],
        price: 16.90
    }];*/
    $scope.pizzaArray = [];
    $scope.menu = [];
    $http.get('/menu').success(function(data){
        $scope.menu = data;
        console.log(data);
    }).error(function(data, status) {
        console.error('http.get error in MainCtrl.js', status, data);
        
     $scope.addPizza = function(pizza) {
        console.log('pizza id:'); 
        console.log(id); 
        pizzaArray.forEach(function(item){
            if (item.id===pizza.id){
                //juz dodal te pizze!
            }
            else {
                pizzaArray.push({id: id, quantity: 1});
            }
            
        
        });
     }
        
    });
});