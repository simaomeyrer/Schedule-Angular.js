angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
console.log(serialGenerator.generate())
$scope.app = "Lista Telefonica"
$scope.contatos = []
$scope.operadoras = []
            
var carregarContatos =  function () {
    contatosAPI.getContatos().then(function(response) {
        $scope.contatos = response.data
    }).catch(function (response) {
        $scope.message = "Algo de errado ocorreu. " + response
    })
}

var carregarOperadoras = function () {
    operadorasAPI.getOperadoras().then(function(response) {
        $scope.operadoras = response.data
    })
}

$scope.adicionarContato = function (contato) {
    // $http({
    //     method: 'POST',
    //     url: 'http://localhost:3412/contatoss',
    //     data: contato,
    // }).then(response => console.log( response.data ))
    contato.serial = serialGenerator.generate()
    contato.data = new Date()
    contatosAPI.saveContato(contato).then(function (data) {
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

carregarContatos()
carregarOperadoras()
})