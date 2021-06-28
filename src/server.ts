import express from 'express'

const app = express()
const port = 3000


/**
 * GET      => Buscar uma informação
 * POST     => Inserir (Criar) uma informação
 * PUT      => Alterar uma informação
 * DELETE   => Remover um dado
 * PATCH    => Alterar uma informação específica
 */

app.get("/test", (req, res) => {
    // req => input
    // res => output
    res.send("Olá NLW")
})

app.post("/test-post", (req, res) => {
    // req => input
    // res => output
    res.send("Olá NLW Rota post")
})

app.listen(port, () => {console.log(`Server running on ${port}`)})