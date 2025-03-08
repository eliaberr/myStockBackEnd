import express from 'express'
const app = express()
const port = 3006

const products = [
{
    id: 1,
    name: "clear man",
    price: "22,40"
}
]

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})