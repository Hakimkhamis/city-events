function AdminController($scope, toaster, $http, Popeye) {
    $scope.event = { };
    $http.get('/event').then(function(response) {
        $scope.events = response.data;
    });
    $scope.deleteEvent = function(id, index) {
        $http.delete("/event/" + id).then(
            function(response) {
                toaster.pop('success', "Success", "Event successfully deleted.");
                $scope.events.splice(index, 1);
            },
            function(error) {
                toaster.pop('error', "Error", "Event was not deleted.");
            }
        )
    }
    $scope.updateEvent = function(event) {
        var modal = Popeye.openModal({
            templateUrl: "update.html",
            controller: "AdminController as adminCtrl",
        });
    
        $scope.showLoading = true;
        modal.resolved.then(function() {
            $scope.showLoading = false;
            $scope.event = event;
        });
    }
}