let nomeDaNave = prompt("Digite o nome da nave")

let velocidadeDaNave = 0

let escolhaOpção

function mostreMenu() {
  let opção 
  while(opção != "1" && opção != "2" && opção != "3" && opção != "4") {
    opção = prompt("O que deseja fazer?\n" +
                   "Insira o número da opção desejada:\n" +
                   "1- Acelerar a nave em 5km/s\n" +
                   "2- Desacelerar a nave em 5km/s\n" +
                   "3- Imprimir dados de bordo\n" +
                   "4- Sair do programa")
  }

  return opção
}

function aceleração(velocidade) {
  let novaVelocidade = velocidade + 5
  return novaVelocidade
}

function desacelere(velocidade) {
  let novaVelocidade = velocidade - 5
  if(novaVelocidade < 0) {
    novaVelocidade = 0
  }
  return novaVelocidade
}

function imprimaNaveEmbarqueData(nome, velocidade) {
  alert("Espaçonave: " + nome + "\nVelocidade: " + velocidade + "km/s")
}

do {
  escolhaOpção = mostreMenu()
  switch(escolhaOpção) {
    case "1": 
      velocidadeDaNave = aceleração(velocidadeDaNave)
      break
    case "2": 
      velocidadeDaNave = desacelere(velocidadeDaNave)
      break
    case "3":
      imprimaNaveEmbarqueData(nomeDaNave, velocidadeDaNave)
      break
    default:
      alert("Encerrando programa de bordo")
  }
} while(escolhaOpção != "4")