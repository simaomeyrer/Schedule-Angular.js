angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
$scope.app = "Lista Telefonica"
$scope.contatos = []
$scope.operadoras = []
            
var carregarContatos =  function () {
    $http.get("http://localhost:3412/contatos").then(function(response) {
        $scope.contatos = response.data
    }).catch(function (response) {
        $scope.message = "Algo de errado ocorreu. " + response
    })
}

var carregarOperadoras = function () {
    $http.get("http://localhost:3412/operadoras").then(function(response) {
        $scope.operadoras = response.data
    })
}

$scope.adicionarContato = function (contato) {
    // $http({
    //     method: 'POST',
    //     url: 'http://localhost:3412/contatoss',
    //     data: contato,
    // }).then(response => console.log( response.data ))

    $http.post("http://localhost:3412/contatos",contato).then(function (data) {
        delete $scope.contato
        $scope.contatoForm.$setPristine()
        carregarContatos()
    }).catch(error => {console.log("Erro:", error)})
}    

$scope.apagarContato = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
        if (!contato.selecionado) return contato 
    })
}
$scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
        return contato.selecionado
    })
}
$scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo 
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
}

carregarOperadoras()
carregarContatos()
})