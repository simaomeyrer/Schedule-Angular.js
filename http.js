var router =  require('./router')

var app = router (3412)

var operadoras = [
    { nome: "Claro", codigo: 14, categoria: "Celular", preco: '1' },
    { nome: "Vivo", codigo: 15, categoria: "Celular", preco: '2' },
    { nome: "Tim", codigo: 41, categoria: "Celular", preco: '3' },
    { nome: "GVT", codigo: 45, categoria: "Fixo", preco: '5' },
    { nome: "NET", codigo: 46, categoria: "Fixo", preco: '0.5' }
];

var contatos = [
    { nome: "Pedro", telefone: "99999-9999", data: new Date() },
    { nome: "Maria", telefone: "99965-9999", data: new Date() },
    { nome: "João", telefone: "91299-4999", data: new Date() }
]

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras))
    res.end()
})

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos))
    res.end()
})

app.post('/contatos', function (req, res) {
    res.end()
})