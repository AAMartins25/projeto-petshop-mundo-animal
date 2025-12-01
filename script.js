// script.js - Funções JavaScript do site Mundo Animal

// Exibe a data atual em um elemento com id "data-atual"
function mostrarDataAtual() {
    const spanData = document.getElementById("data-atual");
    if (spanData) {
        const hoje = new Date();
        const opcoes = { day: "2-digit", month: "2-digit", year: "numeric" };
        spanData.textContent = hoje.toLocaleDateString("pt-BR", opcoes);
    }
}

// Função chamada quando a página é carregada
window.addEventListener("DOMContentLoaded", function () {
    mostrarDataAtual();
});

// Trata o envio do formulário de cadastro (cliente + pet + agendamento)
function enviarCadastro(event) {
    // Impede o envio "real" do formulário (apenas simulação)
    event.preventDefault();

    // Obtém alguns campos principais para montar mensagem
    const nomeCliente = document.getElementById("nome-cliente")?.value || "";
    const nomePet = document.getElementById("nome-pet")?.value || "";
    const servico = document.querySelector("input[name='servico']:checked");
    const tipoAgendamento = document.querySelector("input[name='tipo-agendamento']:checked");
    const data = document.getElementById("data-agendamento")?.value || "";
    const hora = document.getElementById("hora-agendamento")?.value || "";

    let msg = "Cadastro realizado com sucesso!";
    msg += "\n\nDados principais:";
    if (nomeCliente) msg += `\nCliente: ${nomeCliente}`;
    if (nomePet) msg += `\nPet: ${nomePet}`;
    if (servico) msg += `\nServiço: ${servico.value}`;
    if (tipoAgendamento) msg += `\nForma de agendamento: ${tipoAgendamento.value}`;
    if (data) msg += `\nData: ${data}`;
    if (hora) msg += `\nHorário: ${hora}`;

    alert(msg);
}
