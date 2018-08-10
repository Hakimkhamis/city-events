 function EventsController($scope, $http) {
    console.log('abcc')
    
    $http.get('/event').then(function(response) {
        $scope.events = response.data;
        console.log(response.data)
    });
};
console.log('abc')
    