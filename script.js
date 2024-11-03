let contadorCarrinho = 0;
let totalCarrinho = 0;
let itensCarrinho = [];

function adicionarAoCarrinho(produto, preco) {
    contadorCarrinho++;
    totalCarrinho += preco;
    itensCarrinho.push(produto);

    const mensagem = document.getElementById("carrinhoMensagem");
    mensagem.innerText = `${produto} adicionado ao carrinho!`;
    mensagem.classList.remove("escondido");

    document.getElementById("contadorCarrinho").innerText = contadorCarrinho;
    document.getElementById("totalCarrinho").innerText = totalCarrinho.toFixed(2);

    setTimeout(() => {
        mensagem.classList.add("escondido");
    }, 2000);
}

function mostrarCarrinho() {
    const carrinhoDiv = document.getElementById("carrinho");
    const listaCarrinho = document.getElementById("listaCarrinho");
    
    listaCarrinho.innerHTML = ''; // Limpa a lista de itens do carrinho
    itensCarrinho.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        listaCarrinho.appendChild(li);
    });

    carrinhoDiv.classList.toggle("escondido");
}

function finalizarCompra() {
    const checkoutDiv = document.getElementById("checkout");
    checkoutDiv.classList.remove("escondido");
    mostrarCarrinho();
}

function gerarQRCode() {
    const total = totalCarrinho.toFixed(2);
    const cpf = '44531319842';
    const data = `pix://pay?cpf=${cpf}&valor=${total}`;

    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = ''; // Limpa o QR Code anterior

    const img = document.createElement("img");
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=150x150`;
    qrcodeDiv.appendChild(img);
}


    // Simula a verificação de pagamento após 5 segundos
    setTimeout(verificarPagamento, 5000);


function verificarPagamento() {
    // Simula a verificação do pagamento
    const pagamentoConcluido = true; // Simula que o pagamento foi concluído

    if (pagamentoConcluido) {
        alert("Pagamento concluído com sucesso!");
        resetarCarrinho();
    } else {
        alert("Pagamento não concluído. Tente novamente.");
    }
}

function resetarCarrinho() {
    contadorCarrinho = 0;
    totalCarrinho = 0;
    itensCarrinho = [];
    document.getElementById("contadorCarrinho").innerText = contadorCarrinho;
    document.getElementById("totalCarrinho").innerText = totalCarrinho.toFixed(2);
    document.getElementById("carrinho").classList.add("escondido");
    document.getElementById("checkout").classList.add("escondido");
}
