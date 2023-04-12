// Variables and constants declaration
const input = document.querySelector('.input');
const tabela = document.querySelector('.table');
const buttonADD = document.querySelector('.is-primary');
const buttonDEL = document.querySelector('.is-danger');

// Add the class 'is-danger' to the input while the user not digite on the input field
//input.classList.remove('is-primary');
//input.classList.remove('ng-valid');
//input.classList.add('is-danger');
//input.classList.add('ng-invalid');

// Gera um número aleatório entre 0.0 e 10.0 com até 1 casa decimal.
function geraNota() {
    let valor = Math.floor(Math.random() * 101);
    return valor / 10;
}

// Gera a média das 3 notas do aluno inserido com até 2 casas decimais.
function calculaMedia  (nota1, nota2, nota3) {
    let somaNotas = nota1 + nota2 + nota3;
    let media = somaNotas / 3;
    return media.toFixed(2);
}

// Verifica se o aluno está aprovado, em recuperação ou reprovado.
const calculaStatusAluno = (media) => {
    if(media >= 6){
        return "Aprovado";
    }else if(media >= 5){
        return "Recuperação";
    }else{
        return "Reprovado";
    }
}

// Adiciona uma nova linha na tabela
buttonADD.addEventListener('click', (e) =>{
    if(input.value != ''){
        e.preventDefault();

        // Cria as variaveis que serão utilizadas para criar os elementos da tabela
        let nome = input.value;
        let nota1 = geraNota();
        let nota2 = geraNota();
        let nota3 = geraNota();
        let mediaAluno = calculaMedia(nota1, nota2, nota3);
        let statusAluno = calculaStatusAluno(mediaAluno);
        

        // Cria os elementos da tabela e adiciona as classes do Bulma
        let btnPlus = document.createElement('button');
        btnPlus.innerText = "Aumentar nota";
        btnPlus.classList.add("button");
        btnPlus.classList.add("is-primary");
        btnPlus.classList.add("plus");

        let btnMin = document.createElement('button');
        btnMin.innerText = "Diminuir nota";
        btnMin.classList.add("button");
        btnMin.classList.add("is-info");
        btnMin.classList.add("minus");

        let btnRem = document.createElement('button');
        btnRem.innerText = "Remover";
        btnRem.classList.add("button");
        btnRem.classList.add("is-warning");
        btnRem.classList.add("rem");

        let tr = document.createElement('tr');
        let tdNome = document.createElement('td');
        let tdNota1 = document.createElement('td');
        let tdNota2 = document.createElement('td');
        let tdNota3 = document.createElement('td');
        let tdMedia = document.createElement('td'); 
        let tdStatus = document.createElement('td');
        let tdAcoes = document.createElement('td');

        // Adiciona os dados nas respectivas colunas criadas
        tdNome.textContent = nome;
        tdNota1.textContent = nota1;
        tdNota2.textContent = nota2;
        tdNota3.textContent = nota3;
        tdMedia.textContent = mediaAluno;
        tdStatus.textContent = statusAluno;

        // Adiciona os botões na coluna de ações
        tdAcoes.appendChild(btnPlus);
        tdAcoes.appendChild(btnMin);
        tdAcoes.appendChild(btnRem);

        // Adiciona os elementos na linha da tabela
        tr.appendChild(tdNome);
        tr.appendChild(tdNota1);
        tr.appendChild(tdNota2);
        tr.appendChild(tdNota3);
        tr.appendChild(tdMedia);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAcoes);

        // Adiciona a linha na tabela
        tabela.appendChild(tr);

        // Limpa o campo de texto
        input.value = '';
    } else {
        input.classList.add('is-danger');
        input.classList.add('ng-invalid');
    }
    
});


// Remove Stundents from table, button stundents
tabela.addEventListener('click', removeStundents = (e) => {
    if(e.target.classList.contains('rem')){
        e.target.parentElement.parentElement.remove();
    }
});