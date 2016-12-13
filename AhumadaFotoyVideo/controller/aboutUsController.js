angular.module("myApp").controller("aboutUsController", function ($scope, $state) {

    $scope.contactUs = function () {
        $state.go("contactus");
    };


});