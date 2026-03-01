let balance = 100000;

let transactions = [
    { type: "Dépôt", amount: 5000, category: "Epargne" },
    { type: "Retrait", amount: 1200, category: "Facture" },
    { type: "Retrait", amount: 800, category: "Dette" }
];

function updateUI() {
    document.getElementById("balance").textContent = balance + " €";

    const list = document.getElementById("transaction-list");
    list.innerHTML = "";

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.textContent = `${t.type} - ${t.amount} € (${t.category})`;
        list.appendChild(li);
    });
}

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (!amount || amount <= 0) return alert("Montant invalide");

    balance += amount;
    transactions.push({ type: "Dépôt", amount, category });

    updateUI();
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (!amount || amount <= 0) return alert("Montant invalide");

    if (amount > balance) {
        alert("Solde insuffisant !");
        return;
    }

    balance -= amount;
    transactions.push({ type: "Retrait", amount, category });

    updateUI();
}

updateUI();
