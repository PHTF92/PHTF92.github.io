const assert = require('assert')

class BankAccount {
    constructor(identifier, balance) {
        this.identifier = identifier
        if (balance > 0) {
            this.balance = balance
        } else {
            this.balance = 0
        }
    }

    deposit(amount) {
        this.balance = this.balance + amount
        return this.balance
    }

    withdrawal(amount) {
        this.balance = this.balance - amount
        return this.balance
    }
}

class BankTransaction{
    static transfer(conta1, conta2, valor){
        conta1.withdrawal(valor);
        conta2.deposit(valor);
    }
}

let account1 = new BankAccount(1, 300)
let account2 = new BankAccount(2, 500)
BankTransaction.transfer(account1, account2, 100);


assert.equal(typeof BankAccount.prototype, "object")
assert.ok(account1 instanceof BankAccount)
assert.equal(typeof BankAccount.prototype, "object")
assert.ok(account2 instanceof BankAccount)

BankTransaction.transfer(account1, account2, 100)
assert.equal(account1.balance, 200)
assert.equal(account2.balance, 600)
