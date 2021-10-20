const modal = {
    open() { //abrir o modal
        document.querySelector('div.modal-overlay').classList.add('active')
    },
    close() { //fechar o modal
        document.querySelector('div.modal-overlay').classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes() { //somar as entradas

    },
    expenses() { //somar as saídas

    },
    total() { //entradas - saídas

    }
}

const DOM = {
    TransactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.TransactionsContainer.appendChild(tr)

    },

    innerHTMLTransaction(transaction) {
        const cssClass = transaction.amount > 0 ? "income" : "expense"


        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${cssClass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})