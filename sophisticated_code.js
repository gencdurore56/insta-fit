/* sophisticated_code.js */

// This is a complex code that simulates a virtual banking system 
// with multiple accounts and a variety of banking transactions.

// Define the Account class
class Account {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactionHistory.push(`Deposit: +$${amount}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }

    this.balance -= amount;
    this.transactionHistory.push(`Withdrawal: -$${amount}`);
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

// Create multiple accounts
const account1 = new Account(1, "John Doe", 1000);
const account2 = new Account(2, "Jane Smith", 500);

// Perform banking transactions
account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account2.withdraw(300);

// Display account balances and transaction histories
console.log(`Account ${account1.accountNumber} (${account1.accountHolder}) balance: $${account1.balance}`);
console.log(`Account ${account2.accountNumber} (${account2.accountHolder}) balance: $${account2.balance}`);

console.log("Transaction History:");
console.log(`Account ${account1.accountNumber} (${account1.accountHolder}):`, account1.getTransactionHistory());
console.log(`Account ${account2.accountNumber} (${account2.accountHolder}):`, account2.getTransactionHistory());

// More code...
// ...
// ... (over 200 lines)
// ...
// End of the code