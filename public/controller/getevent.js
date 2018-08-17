 function EventsController($scope, $http, Popeye) {
    console.log('abcc')
    
    $http.get('/event').then(function(response) {
        $scope.events = response.data;
        console.log(response.data)

    });
};    