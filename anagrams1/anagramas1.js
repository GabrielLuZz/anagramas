let botao = document.getElementById('botao');
let tela = document.getElementById('tela');
let caixa = document.getElementById('input');
let pais = document.getElementsByName('pais');

botao.addEventListener('click', () => {
    let input = document.getElementById('input');
    if (input.value) {
        tela.innerText = '';
        appendList(input.value);
        input.value = '';
    }

})

caixa.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        let input = document.getElementById('input');
        if (input.value) {
            tela.innerText = '';
            appendList(input.value);
            input.value = '';
        }
    }
})

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(input) {
    if (pais[1].checked) {
        return palavras.filter(item => alphabetize(item) === alphabetize(input));
    } else {
        return words.filter(item => alphabetize(item) === alphabetize(input));
    }

}

function appendList(value) {
    let anagramas = getAnagramsOf(value);
    for (let i = 0; i < anagramas.length; i++) {
        let span = document.createElement('span');
        span.innerText = anagramas[i];
        setTimeout(() => {
            span.style.opacity = 1;
        }, 500)


        tela.appendChild(span);
    }
}