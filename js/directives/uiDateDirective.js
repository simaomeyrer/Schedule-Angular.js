angular.module("listaTelefonica").directive("uiDate", function() {
    return {
        require:"ngModel",
        link: function(scope, element, attrs, ctrl) {
            var _formatDate
            element.bind("keyup", function() {
                ctrl.$setViewValue(ctrl.$viewValue + "!")
                ctrl.$render()
            })
        }
    }
})