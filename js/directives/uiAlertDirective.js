angular.module("listaTelefonica").directive("uiAlert", function() {
    return {
        templateUrl: "js/view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            title: "@title"
        },
        transclude: true
    }
})

