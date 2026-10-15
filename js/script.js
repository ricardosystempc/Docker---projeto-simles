
const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent =
        "JavaScript funcionando dentro da aplicação!";
});
