conexao.connect((error) => {
  if (error) {
    console.log(error)
    console.log("DEU RUIM PAIZÂO")
  } else {
    console.log("CONECTADO PAIZÃO")
    app.listen(port, () => {
      console.log(`App de exemplo esta rodando na porta ${port}`)
    })
  }
})