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
    incomes() {
        let income = 0
        transactions.forEach(transaction =>  {
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })
        return income
    },
    expenses() {
        let expense = 0
        transactions.forEach(transaction =>  {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })
        return expense
    },
    total() {
        let total = Transaction.incomes() + Transaction.expenses()
        return total
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

        const amount = utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${cssClass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    },

    updateBalance() {
        document.
        querySelector('#incomeDisplay')
        .innerHTML = Transaction.incomes()

        document.
        querySelector('#expenseDisplay')
        .innerHTML = Transaction.expenses()

        document.
        querySelector('#totalDisplay')
        .innerHTML = Transaction.total()

    }
}



const utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return `${signal} ${value}`
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()