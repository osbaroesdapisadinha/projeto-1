let usuarios = [];
let produtos = [];
let totalCompra = 0;
let usuarioLogado = null;

// Função para registrar um novo usuário
function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  if (usuarios.some(user => user.username === username)) {
    alert('Usuário já cadastrado!');
    return;
  }

  usuarios.push({ username, password });
  alert('Usuário cadastrado com sucesso!');
  document.getElementById('register-username').value = '';
  document.getElementById('register-password').value = '';
}

// Função para fazer login
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const usuario = usuarios.find(user => user.username === username && user.password === password);
  if (usuario) {
    usuarioLogado = usuario;
    alert('Login realizado com sucesso!');
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    exibirProdutos();
  } else {
    alert('Usuário ou senha incorretos!');
  }
}

// Função para exibir produtos
function exibirProdutos() {
  produtos = [
    { id: 1, nome: 'Camiseta', preco: 49.90 },
    { id: 2, nome: 'Calça Jeans', preco: 99.90 },
    { id: 3, nome: 'Jaqueta', preco: 129.90 },
    { id: 4, nome: 'Shorts', preco: 39.90 }
  ];

  const produtosDiv = document.getElementById('produtos');
  produtos.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';
    produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.preco})">Adicionar ao Carrinho</button>
        `;
    produtosDiv.appendChild(produtoDiv);
  });
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(preco) {
  totalCompra += preco;
  document.getElementById('total').innerText = totalCompra.toFixed(2);
}

// Função para finalizar a compra
function finalizarCompra() {
  if (totalCompra > 0) {
    alert(`Compra finalizada! Total: R$ ${totalCompra.toFixed(2)}`);
    totalCompra = 0;
    document.getElementById('total').innerText = '0.00';
  } else {
    alert('Seu carrinho está vazio!');
  }
}
