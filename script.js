function openSimulation() {
    document.getElementById("simulationForm").style.display = "block";
}

document.getElementById("simulationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let amount = document.getElementById("amount").value;
    let term = document.getElementById("term").value;
    let rate = document.getElementById("rate").value;

    // Cálculo simples de simulação de financiamento
    let monthlyRate = (rate / 100) / 12;
    let monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    monthlyPayment = monthlyPayment.toFixed(2);

    let result = document.getElementById("result");
    result.innerHTML = `
        <h3>Resultado da Simulação</h3>
        <p>Valor do Empréstimo: R$ ${amount}</p>
        <p>Prazo: ${term} meses</p>
        <p>Taxa de Juros: ${rate}% ao ano</p>
        <p><strong>Parcela Mensal: R$ ${monthlyPayment}</strong></p>
    `;
});