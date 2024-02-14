const perguntas = [
    {
        pergunta: "Quando foi fundado o Santos Futebol Clube?",
        respostas: [
            "1902",
            "1912",
            "1922"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o estádio conhecido como a casa do Santos FC?",
        respostas: [
            "Estádio Morumbi",
            "Estádio Pacaembu",
            "Estádio Urbano Caldeira (Vila Belmiro)"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o maior ídolo da história do Santos FC?",
        respostas: [
            "Pelé",
            "Neymar",
            "Robinho"
        ],
        correta: 0
    },
    {
        pergunta: "Qual foi o placar da final da Copa Libertadores da América que o Santos FC venceu em 2011?",
        respostas: [
            "2-0",
            "3-2",
            "1-0"
        ],
        correta: 1
    },
    {
        pergunta: "Quantos títulos brasileiros o Santos FC conquistou até 2022?",
        respostas: [
            "7 títulos",
            "8 títulos",
            "9 títulos"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o apelido do Santos Futebol Clube?",
        respostas: [
            "Tubarão",
            "Peixe",
            "Baleia"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o atual presidente do Santos FC?",
        respostas: [
            "José Carlos Peres",
            "Modesto Roma",
            "Orlando Rollo"
        ],
        correta: 0
    },
    {
        pergunta: "Qual jogador foi artilheiro na conquista da Libertadores em 2011 pelo Santos FC?",
        respostas: [
            "Ganso",
            "Neymar",
            "Elano"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o mascote oficial do Santos FC?",
        respostas: [
            "Leão",
            "Tubarão",
            "Peixe"
        ],
        correta: 2
    },
    {
        pergunta: "Quantas vezes o Santos FC foi campeão mundial?",
        respostas: [
            "1 vez",
            "2 vezes",
            "3 vezes"
        ],
        correta: 0
    }
];

const template = document.querySelector('template');
const quiz = document.querySelector('#quiz');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;


    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (e) => {
            const estaCorreta = e.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
}

