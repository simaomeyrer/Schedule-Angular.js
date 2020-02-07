angular.module("listaTelefonica").filter("name", function() {
    return function (input) {
        var listaDeNomes =input.split(" ")
        var ListaDeNomesFormatada = listaDeNomes.map(function (nome) {
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()
        })
        return ListaDeNomesFormatada.join(" ")
    }
})