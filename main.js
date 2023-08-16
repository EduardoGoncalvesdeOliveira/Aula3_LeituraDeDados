'use strict'

const buttomSoma = document.getElementById('Somar')
const buttomIdentificar = document.getElementById('identificar')

buttomSoma.addEventListener('click', soma)
buttomIdentificar.addEventListener('click', identificar)

function soma() {
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}

buttomSoma.addEventListener('click', soma)

function identificar() {

    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    if (numero > 0) {
        msg = 'positivo'
    } else if (numero < 0) {
        msg = 'negativo'
    } else {
        msg = 'zero'
    }

    resultado.textContent = msg
}


const buttomMedia = document.getElementById('mediaTotal')

buttomMedia.addEventListener('click', calculoMedia)

function calculoMedia() {
    const bim1 = Number(document.getElementById('nota1').value)
    const bim2 = Number(document.getElementById('nota2').value)
    const bim3 = Number(document.getElementById('nota3').value)
    const bim4 = Number(document.getElementById('nota4').value)

    const mediaTotal = document.getElementById('MT')

    const mTotal = (bim1 + bim2 + bim3 + bim4) / 4

    mediaTotal.textContent = mTotal





    if (mTotal >= 7) {

        alert('APROVADO!  ' + mTotal)
    } else if (mTotal < 7) {
        window.prompt('A nota está abaixo da média, insira a nota do exame compensatório feito:', ['Insira a nota do exame aqui!']);

    }
}