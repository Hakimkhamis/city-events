function LoginController($scope, Popeye) {
    $scope.openLogin = function() {
    // Open a modal to show the selected user profile
    var modal = Popeye.openModal({
      templateUrl: "login.html",
      controller: "LoginController as ctrl",

    });

    // Show a spinner while modal is resolving dependencies
    $scope.showLoading = true;
    modal.resolved.then(function() {
      $scope.showLoading = false;
    });

    // Update user after modal is closed
    modal.closed.then(function() {
      $scope.updateUser();
    });
  };

  $scope.openRegistration = function() {
    // Open a modal to show the selected user profile
    var modal = Popeye.openModal({
      templateUrl: "register.html",
      controller: "LoginController as ctrl",

    });

    // Show a spinner while modal is resolving dependencies
    $scope.showLoading = true;
    modal.resolved.then(function() {
      $scope.showLoading = false;
    });

    // Update user after modal is closed
    modal.closed.then(function() {
      $scope.updateUser();
    });
  };
}