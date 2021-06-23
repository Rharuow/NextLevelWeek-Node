import express, { response } from 'express'

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
    response.send("Olá NLW")
})

app.listen(port, () => {console.log(`Server running on ${port}`)})