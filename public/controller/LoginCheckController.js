function LoginCheckController($scope, $http) {
    $scope.error = false;
    $scope.logIn = function() {
        $http.post("/login", $scope.user)
        .then(function(response) {
            localStorage.setItem("user", response.data.token);
            window.location.href = "admin.html";
        }
        ,function(error) {
           $scope.error = true;
           console.log(error);
        })
    }
}   