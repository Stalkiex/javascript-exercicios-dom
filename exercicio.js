// 1. Quadrado de um número
document.getElementById('btn-quad').addEventListener('click', function() {
    let n = document.getElementById('quad-n').value;
    document.getElementById('quad-res').innerText = n * n;
});

// 2. Subtrair dois números
document.getElementById('btn-sub').addEventListener('click', function() {
    let a = document.getElementById('sub-a').value;
    let b = document.getElementById('sub-b').value;
    document.getElementById('sub-res').innerText = a - b;
});

// 3. Maior de dois números
document.getElementById('btn-maior').addEventListener('click', function() {
    // Usamos Number() para garantir que o JavaScript não os trata como texto
    let a = Number(document.getElementById('maior-a').value);
    let b = Number(document.getElementById('maior-b').value);
    
    if (a > b) {
        document.getElementById('maior-res').innerText = a;
    } else {
        document.getElementById('maior-res').innerText = b;
    }
});

// 4. Contar caracteres
document.getElementById('btn-contar').addEventListener('click', function() {
    let texto = document.getElementById('texto').value;
    document.getElementById('contar-res').innerText = texto.length;
});

// 5. Verificar maioridade
document.getElementById('btn-idade').addEventListener('click', function() {
    let idade = document.getElementById('idade').value;
    if (idade >= 18) {
        document.getElementById('idade-res').innerText = "És maior de idade!";
    } else {
        document.getElementById('idade-res').innerText = "Ainda és menor.";
    }
});

// 6. Converter texto em maiúsculas
document.getElementById('btn-upper').addEventListener('click', function() {
    let nome = document.getElementById('nome').value;
    document.getElementById('upper-res').innerText = nome.toUpperCase();
});