angular.module("listaTelefonica").controller('listaTelefonicaCtrl', function ($scope, $http, contatosAPI) {
    $scope.app = "Lista Telefonica"

    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data
        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema: " + data
        })
    }

    var carregaOperadoras = function () {
        $http.get("http://localhost:3412/operadoras").success(function (data) {
            $scope.operadoras = data
        })
    }

    $scope.adicionarContato = function (contato) {
        $http.post("http://localhost:3412/contatos", contato).success(function (data) {
            delete $scope.contato
            $scope.contatoForm.$setPristine()
            carregarContatos()
        })

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
    carregaOperadoras()

})