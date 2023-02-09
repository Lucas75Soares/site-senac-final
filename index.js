
/*var nome = prompt("Digite um nome: ");
var dia=1prompt("Digite um dia: ") ;

var frase = nome + " faltou na aula no dia " + dia 
console.log(frase)

var idade = prompt("Digite sua idade: ")

if (idade >= 18) {
    console.log(idade + ": Maior de Idade")
}

else {
    console.log(idade + ": Menor de Idade")
}


var nota = prompt("Digite uma nota: ")
if (nota >= 60) {
    console.log(nota + ": Aprovado")
}

else {
    console.log(nota + ": Reprovado")
}

var altura = prompt("Altura")
var peso = prompt("Peso")
var imc = peso/(altura*altura)

if (imc < 18.5) {
    console.log ("Magreza")
}
else if (imc  <= 24.9 ) {
    console.log ("Normal")
}
else if (imc  <= 29.9 ) {
    console.log ("Sobrepeso")
}
else if (imc  <= 39.9 ) {
    console.log ("Obesidade")
}
else if (imc  > 40) {
    console.log ("Obesidade Grave")
}


const alunos = [ "Lucas", "Vanderlei", "Pedro", "Luiz","João", "Arthur", "Giovanni", "Cecília","Maria","João 2" ]
alunos.forEach(Element => console.log(Element))
*/

/*
var cursos = [cursoAdministração, cursoEnfermagem, cursoProgramação]

cursos.forEach (curso => console.log (curso.nome + ": " + curso.topicos + ": "))

var titulo=document.getElementById("titulo")
var saibamais=document.getElementById("SM")
var span=document.getElementById("span")
var footer=document.getElementById("foot")
var programacao=document.getElementById("prog")


titulo.style.backgroundColor="Green"
titulo.style.color="black"

saibamais.style.backgroundColor="Green"
span.style.backgroundColor="Red" 

footer.innerHTML = "<h1>FOOTER</h1>"
programacao.innerHTML = "<h1>PROGRAMAÇÃO</H1>"


var topicos = document.getElementById("topics")
console.log(topicos)

var liTopico = document.createElement("li")
console.log(liTopico)

liTopico.innerText = "Front-End"

topicos.appendChild(liTopico)

liTopico.classList = "wrap.txt"

var button = document.getElementById("btn-header")

var liButton = document.createElement("li")
liButton.innerHTML = `<a href="#">Sobre nós</a>`


button.appendChild(liButton)
liButton.classList = "btn-header"   
*/

var cursoAdministração = {
    nome: "Administração",
    descricao: "Direcionado para quem queira trabalhar no setor administrativo e com finanças.",
    topicos: ["Administração", "Marketing", "Finanças e Contabilidade"],
    imagem : "images/administracao.jpg"
}

var cursoEnfermagem = {
    nome: "Enfermagem",
    descricao: "Para você que gostaria de ingressar na área da saúde.",
    topicos: ["Biossegurança", "Primeiros Socorros", "Ministração de Medicamentos"],
    imagem: "images/enfermagem.jpg"
}

var cursoProgramação = {
    nome: "Programação",
    descricao: "Curso para todos que tem interesse em ingressar na área da tecnologia.",
    topicos: ["Tecnologia", "Design UI/UX", "Desenvolvimento Web"],
    imagem: "images/programacao.jpg"
}

var licurso = document.getElementById("licurso")
var cursos = [cursoAdministração, cursoEnfermagem, cursoProgramação]

cursos.forEach(curso => {
    var listaitem = document.createElement("li");
    var topicos = "";
    curso.topicos.forEach(topico => {
        topicos = topicos + `<li>${topico}</li>`
    })
    listaitem.innerHTML = `<img class="programaimg" src="${curso.imagem}">
    <div class="cursos-descricao">
        <span class="span"></span>
        <h2 id="programh2">${curso.nome}</h2>
        <p>${curso.descricao}
        </p>
        <ul class="wrap-txt">
           ${topicos}
        </ul>
        <a href="#" class="saiba-mais">Saiba Mais</a>
    </div>`
    listaitem.classList = "cursos-item"
    licurso.appendChild(listaitem)
})


console.log (licurso)
