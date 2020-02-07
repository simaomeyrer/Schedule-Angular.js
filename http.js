var router = require ('./router');

var app = router(3412);

 var operadoras = [
    { nome: "Vivo", código: "15", categoria: "Celular", preco: 1},
    { nome: "Claro", código: "16", categoria: "Celular", preco: 3},
    { nome: "Oi", código: "14", categoria: "Celular", preco: 2},
    { nome: "GVT", código: "25", categoria: "Fixo", preco: 0.5},
    { nome: "Embratel", código: "21", categoria: "Fixo", preco: 0.7}
 ];

 var contatos = [
    { nome: "simão meyrer", telefone: "99952-8263", data: new Date()},
    { nome: "cAli junior", telefone: "91932-8499", data: new Date()},
    { nome: "VINI cius", telefone: "98832-1153",  data: new Date()}
 ];

 app.get('/operadoras', function(req, res) {
     res.write(JSON.stringify(operadoras));
     res.end();
 });

 app.get('/contatos', function(req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function(req, res) {
   res.end();
 });
