// 1. Mudar o conteúdo HTML (Texto)
function mudarConteudo() {
    document.getElementById("demo").innerHTML = "Surprise! O texto foi alterado!";
}

// 2. Mudar atributos (Imagens)
function imagem1() {
    document.getElementById("myImage").src = "boneco.jpg";
}

function imagem2() {
    document.getElementById("myImage").src = "html.jpg"; 
}

// 3. Mudar estilos CSS (Tamanho e Cor)
function estiloNormal() {
    document.getElementById("demo2").style.fontSize = "16px";
    document.getElementById("demo2").style.color = "black";
}

function estiloGrande() {
    document.getElementById("demo2").style.fontSize = "35px";
    document.getElementById("demo2").style.color = "red";
}

// 4. Esconder e Mostrar elementos
function esconder() {
    document.getElementById("demo3").style.display = "none";
}

function mostrar() {
    document.getElementById("demo3").style.display = "block";
}
