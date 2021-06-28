import express from 'express'
import 'reflect-metadata'
import './database'

const app = express()
const port = 3000

app.listen(port, () => {console.log(`Server running on ${port}`)})