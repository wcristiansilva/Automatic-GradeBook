// Variables and constants declaration
const input = document.querySelector('.input');
const tabela = document.querySelector('.table');
const buttonADD = document.querySelector('.is-primary');
const buttonDEL = document.querySelector('.is-danger');


// Generates a random number between 0.0 and 10.0 with up to 1 decimal place from 0.5 to 0.5.
function geraNota() {
    let num = Math.round(Math.random() * 20) / 2;
    return num;
    /* let valor = Math.floor(Math.random() * 101);
    return valor / 10; */
}

// Generates the average of the 3 grades of the entered student's.
function calculaMedia  (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Check if the student is passing, in recovery or failing.
const calculaStatusAluno = (media) => {
    if(media >= 6){
        return "Aprovado";
    }else if(media >= 5){
        return "Recuperação";
    }else{
        return "Reprovado";
    }
}

// Increase the student's grade
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
        btnPlus.innerText = "+ nota";
        btnPlus.classList.add("button");
        btnPlus.classList.add("is-primary");
        btnPlus.classList.add("plus");

        let btnMin = document.createElement('button');
        btnMin.innerText = "- nota";
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
        tdMedia.textContent = mediaAluno.toFixed(2);
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

// add 0.5 to the student's grade
tabela.addEventListener('click', addGrade = (e) => {
    if(e.target.classList.contains('plus')){
        // Seleciona as colunas das notas da média e do status
        let tdNota1 = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        let tdNota2 = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        let tdNota3 = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
        let tdMedia = e.target.parentElement.previousElementSibling.previousElementSibling;
        let tdStatus = e.target.parentElement.previousElementSibling;

        // Converte as notas para float
        let nota1 = parseFloat(tdNota1.textContent);
        let nota2 = parseFloat(tdNota2.textContent);
        let nota3 = parseFloat(tdNota3.textContent);

        // Verifica se a nota é menor que 10, se for, adiciona 0.5 em cada nota
        if(nota1 < 10){
            nota1 += 0.5;
            tdNota1.textContent = nota1;
        }
        if(nota2 < 10){
            nota2 += 0.5;
            tdNota2.textContent = nota2;
        }
        if(nota3 < 10){
            nota3 += 0.5;
            tdNota3.textContent = nota3;
        }

        // Calcula a média e o status do aluno
        let mA = parseFloat(calculaMedia(nota1, nota2, nota3));
        let sA = calculaStatusAluno(mA);

        // Verifica se a média é menor ou igual a 10, se for, atualiza a média e o status do aluno
        if(mA <= 10){
            console.log(mA);
            tdMedia.textContent = mA.toFixed(2);
            tdStatus.textContent = sA;
        }
    }
});

// Remove 0.5 to the stunent's grade
tabela.addEventListener('click', minusGrade = (e) => {
    if(e.target.classList.contains('minus')){
        // Seleciona as colunas das notas das média e do status
        let tdNota1 = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        let tdNota2 = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        let tdNota3 = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
        let tdMedia = e.target.parentElement.previousElementSibling.previousElementSibling;
        let tdStatus = e.target.parentElement.previousElementSibling;

        // Converte as notas para float e subtrai 0.5
        let nota1 = parseFloat(tdNota1.textContent) - 0.5;
        let nota2 = parseFloat(tdNota2.textContent) - 0.5;
        let nota3 = parseFloat(tdNota3.textContent) - 0.5;
        let media = parseFloat(tdMedia.textContent);
        let statusAluno = tdStatus.textContent;

        // Calcula a média e o status do aluno
        media = calculaMedia(nota1, nota2, nota3);
        statusAluno = calculaStatusAluno(media);

        // Verifica se a nota é maior que 0, se for, subtrai 0.5 em cada nota
        if(nota1 >= 0){
            tdNota1.textContent = (nota1).toFixed(1);
        }
        if(nota2 >= 0){
            tdNota2.textContent = (nota2).toFixed(1);
        }
        if(nota3 >= 0){
            tdNota3.textContent = (nota3).toFixed(1);
        }
        if(media >= 0){
            tdMedia.textContent = media.toFixed(2);
            tdStatus.textContent = statusAluno;
        }
    }
});

// Removes the worst average from the table of students
buttonDEL.addEventListener('click', removePiorMedia = () => { 

    // seleciona todas as células de média da tabela
    let medias = document.querySelectorAll("table td:nth-child(5)");

    // inicializa com um valor muito grande ou o de sua preferencia sendo no minimo 1 acima da nota maxima como no caso 10 + 1 = 11 ou pode ser Infinity 
    let piorMedia = 11; // or Infinity; 
    let linhaPiorMedia;

    // percorre cada célula de média
    medias.forEach((media) => {
        // converte o texto da célula para um número
        let valor = parseFloat(media.textContent);

        // verifica se a média é a pior até agora
        if (valor < piorMedia) {
            piorMedia = valor;
            // armazena a linha correspondente à pior média
            linhaPiorMedia = media.parentNode;
            console.log(linhaPiorMedia);
        }
    });

    // remove the line of the table with the worst average
    linhaPiorMedia.remove();
});