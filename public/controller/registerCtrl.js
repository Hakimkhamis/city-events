function RegisterCtrl($scope){
    $scope.openRegistration = function() {
        // Open a modal to show the selected user profile
        var modal = Popeye.openModal({
          templateUrl: "register.html",
          controller: "RegisterCtrl as ctrl",
    
        });
    }
}
