//container-1
function idadeEmDias() {
    let dias = Number(prompt('Idade: ') * 365)

    let lista = document.createElement('div')
    lista.setAttribute('id', 'idade-em-dias')
    lista.innerHTML = `<h2> A idade em dias é: ${dias} </h2> `
    document.querySelector('.container-1').appendChild(lista)
} 

function resetar() {
    document.querySelector('#idade-em-dias').remove()
}

//container-2
function addImagem() {
    let imagem = document.createElement('img')
    imagem.src = 'data:image/jpeg;base64,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'
    document.querySelector('.imagens').appendChild(imagem)
}

//container-3
function ppt(escolha) {
    document.querySelector('.ppt-opcoes').remove()

    let url = {
        'pedra': "https://cdn.clipart.email/5bbe141b88494093fa65179df1abf2cc_rock-clip-art-free-clipart-panda-free-clipart-images_2400-2171.png",
        'papel': "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paper-notes.svg/1200px-Paper-notes.svg.png",
        'tesoura': "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/1280px-Scissors_icon_black.svg.png" 
    }
    
    let ganhador = ganhadorppt(escolha)

    vencedorDiv = document.createElement('img')
    mensagemDiv = document.createElement('h3')
    perdedorDiv = document.createElement('img')

    vencedorDiv.src = url[escolha]
    vencedorDiv.style.height = '100px'
    vencedorDiv.style.width = '100px'

    mensagemDiv.innerHTML = ganhador['resultado']
    mensagemDiv.classList.add('resultado-output')

    perdedorDiv.src = url[ganhador['computador']]
    perdedorDiv.style.height = '100px'
    perdedorDiv.style.width = '100px'

    let novaDiv = document.createElement('div')
    novaDiv.classList.add('ppt-opcoes')
    document.querySelector('.container-3').appendChild(novaDiv)

    novaDiv.appendChild(vencedorDiv)
    novaDiv.appendChild(mensagemDiv)
    novaDiv.appendChild(perdedorDiv)

    if (ganhador['resultado'] == 'vitoria') {
        vencedorDiv.style.boxShadow = `0px 5px 40px ${ganhador['cor']}`
        mensagemDiv.style.textShadow = `0px 5px 5px ${ganhador['cor']}`
        perdedorDiv.style.boxShadow = `0px 5px 40px red` 
    } else if (ganhador['resultado'] == 'empate') {
        vencedorDiv.style.boxShadow = `0px 5px 40px ${ganhador['cor']}`
        mensagemDiv.style.textShadow = `0px 5px 5px ${ganhador['cor']}`
        perdedorDiv.style.boxShadow = `0px 5px 40px ${ganhador['cor']}` 
    } else {
        vencedorDiv.style.boxShadow = `0px 5px 40px ${ganhador['cor']}`
        mensagemDiv.style.textShadow = `0px 5px 5px ${ganhador['cor']}`
        perdedorDiv.style.boxShadow = `0px 5px 40px green` 
    }

}

function ganhadorppt(escolha) {
    let ppt = {
        'pedra': {'tesoura': 1, 'pedra': 0.5, 'papel': 0},
        'papel': {'pedra': 1, 'papel': 0.5, 'tesoura': 0},
        'tesoura': {'papel': 1, 'tesoura': 0.5, 'pedra': 0}
    }
    
    let computador = aleatorioppt()
    let opcao = ppt[escolha][computador]

    if (opcao == 1) {
        return {'resultado': 'vitoria','cor': 'green', 'computador': computador}
    } else if (opcao == 0.5) {
        return {'resultado': 'empate', 'cor': 'black', 'computador': computador}
    } else {
        return {'resultado': 'derrota', 'cor': 'red', 'computador': computador}
    }
}

function aleatorioppt() {
    let random = Math.floor(Math.random() * 3)
    return ['pedra', 'papel', 'tesoura'][random]
}

//container-4
let botoes = document.querySelectorAll('button')

const botoesCopia = []

for (let i = 0; i < botoes.length; i++) {
    botoesCopia.push('btn ' + botoes[i].classList[1])
}

function mudaCor(escolha) {
    let corDataBase = ['btn btn-primary', 'btn btn-success', 'btn btn-warning', 'btn btn-danger']

    if (escolha.value == 'random') {
        aleatorioCor(botoes, corDataBase)
    } else if (escolha.value == 'red') {
        vermelhoCor(botoes, corDataBase)
    } else if (escolha.value == 'green') {
        verdeCor(botoes, corDataBase)
    } else {
        reset(botoes,botoesCopia)
    }
}

function aleatorioCor(botoes, database) {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList = database[randomEscolha()]
    }
}

function randomEscolha() {
    return Math.floor(Math.random() * 4)
}

function vermelhoCor(botoes, database) {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList = database[3]
    }
}

function verdeCor(botoes, database) {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList = database[1]
    }
}

function reset(botoes, botoesCopia) {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList = botoesCopia[i]
    }
}

//container-5

document.querySelector('#botao-hit').addEventListener('click', hit)
document.querySelector('#botao-passar').addEventListener('click', computadorLogica)
document.querySelector('#botao-finalizar').addEventListener('click', finalizar)

let bancoDeDados = {
    'jogador': {'titulo': '#placar-titulo-jogador', 'div': '.tabuleiro-jogador', 'placar': 0},
    'computador': {'titulo': '#placar-titulo-computador', 'div': '.tabuleiro-computador', 'placar': 0},
    'cartas': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cartasValor': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'vitorias': 0,
    'derrotas': 0,
    'empates': 0,
    'PassarClicado': false,
    'podeFinalizar': false
}

const jogador = bancoDeDados['jogador']
const computador = bancoDeDados['computador']

const somCarta = new Audio('./sounds/swish.m4a')
const somVitoria = new Audio('./sounds/cash.mp3')
const somDerrota = new Audio('./sounds/aww.mp3')

function hit() {
    if (bancoDeDados['PassarClicado'] == false) {
        let carta = cartaAleatoria()
        mostrarCarta(carta, jogador)
        atualizarPlacar(carta, jogador)
        mostrarPlacar(jogador)
    }
}

function cartaAleatoria() {
    let random = Math.floor(Math.random() * bancoDeDados['cartas'].length)
    return bancoDeDados['cartas'][random]
}

function mostrarCarta(carta, jogadorativo) {
    if (jogadorativo['placar'] <= 21) {
        let cartaImage = document.createElement('img')

        cartaImage.src = `./images/${carta}.png`
        cartaImage.style.height = '90px'
        cartaImage.style.margin = '5px'
        somCarta.play()

        document.querySelector(jogadorativo['div']).appendChild(cartaImage)
    }
}

function atualizarPlacar(carta, jogadorativo) {
    if (carta == 'A') {
        if (jogadorativo['placar'] + bancoDeDados['cartasValor']['A'][1] <= 21) {
            jogadorativo['placar'] += bancoDeDados['cartasValor']['A'][1]
        } else {
            jogadorativo['placar'] += bancoDeDados['cartasValor']['A'][0]
        }
    } else {
        jogadorativo['placar'] += bancoDeDados['cartasValor'][carta]
    }
}

function mostrarPlacar(jogadorativo) {
    if (jogadorativo['placar'] <= 21) {
        document.querySelector(jogadorativo['titulo']).textContent = jogadorativo['placar']
    } else {
        document.querySelector(jogadorativo['titulo']).textContent = 'EXCEDEU!'
        document.querySelector(jogadorativo['titulo']).style.color = 'red'
    }
}

function finalizar() {
    if (bancoDeDados['podeFinalizar'] == true) {
        let imagens = document.querySelector('.tabuleiro').querySelectorAll('img')

        for (let i = 0; i < imagens.length; i++) {
            imagens[i].remove()
        }

        document.querySelector('#placar-titulo-jogador').textContent = 0
        document.querySelector('#placar-titulo-jogador').style.color = 'white'

        document.querySelector('#placar-titulo-computador').textContent = 0
        document.querySelector('#placar-titulo-computador').style.color = 'white'

        document.querySelector('.legenda-cabecalho').textContent = 'Vamos jogar'
        document.querySelector('.legenda-cabecalho').style.color = 'black'

        jogador['placar'] = 0
        computador['placar'] = 0

        bancoDeDados['podeFinalizar'] = false
        bancoDeDados['PassarClicado'] = false
    }
}

function computadorLogica() {
    bancoDeDados['PassarClicado'] = true

    if (computador['placar'] < 15) {
        let carta = cartaAleatoria()
        mostrarCarta(carta, computador)
        atualizarPlacar(carta, computador)
        mostrarPlacar(computador)
    }
    if (computador['placar'] >= 15) {
        bancoDeDados['podeFinalizar'] = true

        decidirVencedor()
    }
}

function decidirVencedor() {

    let resultado, resultadoCor

    if (jogador['placar'] <= 21) {
        if (jogador['placar'] > computador['placar'] || computador['placar'] > 21) {
            resultado = 'Você ganhou'
            resultadoCor = 'green'
            somVitoria.play()
            bancoDeDados['vitorias']++
        } else if (jogador['placar'] < computador['placar']) {
            resultado = 'Você perdeu'
            resultadoCor = 'red'
            somDerrota.play()
            bancoDeDados['derrotas']++
        } else if (jogador['placar'] == computador['placar']) {
            resultado = 'Empate'
            resultadoCor = 'black'
            bancoDeDados['empates']++
        }
    } else if (jogador['placar'] > 21) {
        resultado = 'Você perdeu'
        resultadoCor = 'red'
        somDerrota.play()
        bancoDeDados['derrotas']++
    } else if (jogador['placar'] && computador['placar'] > 21) {
        resultado = 'Empate'
        resultadoCor = 'black'
        bancoDeDados['empates']++
    }
    document.querySelector('.legenda-cabecalho').textContent = resultado
    document.querySelector('.legenda-cabecalho').style.color = resultadoCor

    atualizarTabela()
}

function atualizarTabela() {
    document.querySelector('.vitorias').textContent = bancoDeDados['vitorias']
    document.querySelector('.derrotas').textContent = bancoDeDados['derrotas']
    document.querySelector('.empates').textContent = bancoDeDados['empates']
}