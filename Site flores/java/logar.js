function logar(event) {
    event.preventDefault();
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === "admin" && senha === "1234") {
        alert('Login realizado com sucesso!');
        window.location.href = "index.html";
    } else {
        alert('Usuário ou senha incorretos.');
    }
}