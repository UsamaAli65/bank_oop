// import { faker } from "@faker-js/faker";
// import inquire from "inquirer";
// import chalk from "chalk";

// class Customer {
//     firstName: string;
//     lastName: string;
//     age: number;
//     gender: string;
//     mobile_numebr: number;
//     account_number: number;


//     constructor(
//         fname: string,
//         lName: string,
//         age: number,
//         mobile_numebr: number,
//         account_number: number) {
//         this.firstName = fname;
//         this.lastName = lName;
//         this.age = age;
//         this.mobile_numebr = mobile_numebr;
//         this.account_number = account_number;
//     }
// }

// interface bankAccount {
//     account_number: number;
//     balance: number;
// }
// // class bank
// class Bank {
//     customers: Customer[];
//     bankAccounts: bankAccount[];

//     addCustomer(obj: Customer) {
//         this.customers.push(obj);
//     }

//     addAccountNumber(obj: bankAccount) {
//         this.addAccountNumber.push(obj);
//     }

//     transcationNumber(obj: BankAccount) {
//         let NEwAccounts = this.addAccountNumber.filter(
//             (acc) => acc.account_number !== accObj.accNumber
//         );
//         this.account = [...NEwAccounts, accObj];
//     }
// }

// let SadaPay = new Bank();

// // let cus = new Customer("Usama", "Ali", 20, 9876543210, 123456789);
// // let cus2 = new Customer("Safder", "khan", 65, 9846543210, 123456789);

// for (let i: number = 1; i <= 2; i++) {
//     let fname = faker.person.firstName("male");
//     let lname = faker.person.firstName();
//     let num = parseInt(faker.phone.number("3############"));
//     const cus = new Customer(fname, lname, 25 * i, "male", num, 1000 + i);
//     myBank.addCustomer(cus);
//     myBank.addAccountNumber({ accNumber: cus.account_number, balance: 100000 * i });
// }


// // Bank Functionality


// async function BankService(bank: Bank) {
//     do{
//         let service = await inquire.prompt({
//             type: 'list',
//             name: 'select',
//             message: 'Select the option',
//             choices: ['view balance', 'Withdraw', 'Deposit', 'exit' ]
//         })
//         // View balnce
//         if (service.select == 'view balance') {
//             let response = await inquire.prompt({
//                 type: 'input',
//                 name: 'num',
//                 message: 'Enter the account number'
//             })
//             let account = bank.accountNumber.find((acc) => acc.accNumber == response.num);
//             if (!account) {
//                 console.log(chalk.red.italic("invalid Account Numebr"));
//             }
//             if (account) {
//                 let ans = await inquire.prompt({
//                     type: 'number',
//                     message: 'Enter the amount to deposit',
//                     name: 'Rs'
//                 })
//                 if (ans.Rs > account.balance) {
//                     console.log(chalk.red.bold("Insufficient Balance"));
                    
//                 }
//                 let newBalance = account.balance + ans.Rs;
//                 // tanscation methad call
//                 bank.transcation({ accNumber: account.accNumber, balance: newBalance })
//                 console.log(newBalance)
//             }
//             if (account) {
//                 let name = myBank.customers.find((item) => item.account_number == account.accNumber);
//                 console.log((`Hello ${chalk.green.italic("name?. firstName")} ${chalk.green.italic(name?.lastName)} YOur account balnce is ${chalk.bold.blueBright(`$${account.balance}`)}`));
    
//             }
    
//         }
    
//         // withdraw
    
//         if (service.select == 'Withdraw') {
//             let response = await inquire.prompt({
//                 type: 'input',
//                 name: 'num',
//                 message: 'Enter the account number'
//             })
//             let account = bank.accountNumber.find((acc) => acc.accNumber == response.num);
//             if (!account) {
//                 console.log(chalk.red.italic("invalid Account Numebr"));
//             }
//             if (account) {
//                 let ans = await inquire.prompt({
//                     type: 'number',
//                     message: 'Enter the amount to deposit',
//                     name: 'Rs'
//                 })
//                 let newBalance = account.balance + ans.Rs;
//                 // tanscation methad call
//                 bank.transcation({ accNumber: account.accNumber, balance: newBalance })
//                 console.log(newBalance)
//             }
//             if (account) {
//                 let name = myBank.customers.find((item) => item.account_number == account.accNumber);
//                 console.log((`Hello ${chalk.green.italic("name?. firstName")} ${chalk.green.italic(name?.lastName)} YOur account balnce is ${chalk.bold.blueBright(`$${account.balance}`)}`));
    
//             }
    
//         }
//         // deposite
    
//         if (service.select == 'Deposit) {
//         let response = await inquire.prompt({
//             type: 'input',
//             name: 'num',
//             message: 'Enter the account number'
//         })
//         let account = bank.accountNumber.find((acc) => acc.accNumber == response.num);
//         if (!account) {
//             console.log(chalk.red.italic("invalid Account Numebr"));
//         }
//         if (account) {
//             let ans = await inquire.prompt({
//                 type: 'number',
//                 message: 'Enter the amount to deposit',
//                 name: 'Rs'
//             })
//             let newBalance = account.balance + ans.Rs;
//             // tanscation methad call
//             bank.transcation({ accNumber: account.accNumber, balance: newBalance })
//             // console.log(newBalance)
//         }
//         if (account) {
//             let name = myBank.customers.find((item) => item.account_number == account.accNumber);
//             console.log((`Hello ${chalk.green.italic("name?. firstName")} ${chalk.green.italic(name?.lastName)} YOur account balnce is ${chalk.bold.blueBright(`$${account.balance}`)}`));
    
//         }
//         if (service.select == 'exit') {
//             return;
//         }
//     } while (true)

// }


///////////////////////////////////////////////////////////////////////////////////
// import faker from "@faker-js/faker";
// import inquirer from "inquirer";
// import chalk from "chalk";

// class Customer {
//     firstName: string;
//     lastName: string;
//     age: number;
//     gender: string;
//     mobile_number: number;
//     account_number: number;

//     constructor(
//         fname: string,
//         lName: string,
//         age: number,
//         gender: string,
//         mobile_number: number,
//         account_number: number
//     ) {
//         this.firstName = fname;
//         this.lastName = lName;
//         this.age = age;
//         this.gender = gender;
//         this.mobile_number = mobile_number;
//         this.account_number = account_number;
//     }
// }

// interface BankAccount {
//     account_number: number;
//     balance: number;
// }

// class Bank {
//     customers: Customer[];
//     bankAccounts: BankAccount[];

//     constructor() {
//         this.customers = [];
//         this.bankAccounts = [];
//     }

//     addCustomer(obj: Customer) {
//         this.customers.push(obj);
//     }

//     addAccountNumber(obj: BankAccount) {
//         this.bankAccounts.push(obj);
//     }

//     transaction(accountNumber: number, balance: number) {
//         const index = this.bankAccounts.findIndex((acc) => acc.account_number === accountNumber);
//         if (index !== -1) {
//             this.bankAccounts[index].balance = balance;
//         }
//     }
// }

// const myBank = new Bank();

// for (let i: number = 1; i <= 2; i++) {
//     const fname = faker.name.firstName();
//     const lname = faker.name.lastName();
//     const num = parseInt(faker.phone.phoneNumber("3#########"));
//     const cus = new Customer(fname, lname, 25 * i, "male", num, 1000 + i);
//     myBank.addCustomer(cus);
//     myBank.addAccountNumber({ account_number: cus.account_number, balance: 100000 * i });
// }

// async function BankService(bank: Bank) {
//     do {
//         const service = await inquirer.prompt({
//             type: 'list',
//             name: 'select',
//             message: 'Select the option',
//             choices: ['view balance', 'Withdraw', 'Deposit', 'exit']
//         });

//         // View balance
//         if (service.select === 'view balance') {
//             const response = await inquirer.prompt({
//                 type: 'input',
//                 name: 'num',
//                 message: 'Enter the account number'
//             });

//             const account = bank.bankAccounts.find((acc) => acc.account_number === parseInt(response.num));

//             if (!account) {
//                 console.log(chalk.red.italic("Invalid Account Number"));
//             }

//             if (account) {
//                 const ans = await inquirer.prompt({
//                     type: 'number',
//                     message: 'Enter the amount to deposit',
//                     name: 'Rs'
//                 });

//                 if (ans.Rs > account.balance) {
//                     console.log(chalk.red.bold("Insufficient Balance"));
//                 }

//                 const newBalance = account.balance + ans.Rs;
//                 bank.transaction(account.account_number, newBalance);
//                 console.log(newBalance);
//             }

//             if (account) {
//                 const customer = myBank.customers.find((item) => item.account_number === account.account_number);

//                 if (customer) {
//                     console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
//                 }
//             }
//         }

//         // Withdraw
//         if (service.select === 'Withdraw') {
//             const response = await inquirer.prompt({
//                 type: 'input',
//                 name: 'num',
//                 message: 'Enter the account number'
//             });

//             const account = bank.bankAccounts.find((acc) => acc.account_number === parseInt(response.num));

//             if (!account) {
//                 console.log(chalk.red.italic("Invalid Account Number"));
//             }

//             if (account) {
//                 const ans = await inquirer.prompt({
//                     type: 'number',
//                     message: 'Enter the amount to withdraw',
//                     name: 'Rs'
//                 });

//                 if (ans.Rs > account.balance) {
//                     console.log(chalk.red.bold("Insufficient Balance"));
//                 }

//                 const newBalance = account.balance - ans.Rs;
//                 bank.transaction(account.account_number, newBalance);
//                 console.log(newBalance);
//             }

//             if (account) {
//                 const customer = myBank.customers.find((item) => item.account_number === account.account_number);

//                 if (customer) {
//                     console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
//                 }
//             }
//         }

//         // Deposit
//         if (service.select === 'Deposit') {
//             const response = await inquirer.prompt({
//                 type: 'input',
//                 name: 'num',
//                 message: 'Enter the account number'
//             });

//             const account = bank.bankAccounts.find((acc) => acc.account_number === parseInt(response.num));

//             if (!account) {
//                 console.log(chalk.red.italic("Invalid Account Number"));
//             }

//             if (account) {
//                 const ans = await inquirer.prompt({
//                     type: 'number',
//                     message: 'Enter the amount to deposit',
//                     name: 'Rs'
//                 });

//                 const newBalance = account.balance + ans.Rs;
//                 bank.transaction(account.account_number, newBalance);
//                 console.log(newBalance);
//             }

//             if (account) {
//                 const customer = myBank.customers.find((item) => item.account_number === account.account_number);

//                 if (customer) {
//                     console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
//                 }
//             }
//         }

//         if (service.select === 'exit') {
//             return;
//         }
//     } while (true);
// }

// BankService(myBank);




import faker from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";

class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobileNumber: number;
    accountNumber: number;

    constructor(
        fname: string,
        lName: string,
        age: number,
        gender: string,
        mobileNumber: number,
        accountNumber: number
    ) {
        this.firstName = fname;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
    }
}

interface BankAccount {
    accountNumber: number;
    balance: number;
}

class Bank {
    customers: Customer[];
    bankAccounts: BankAccount[];

    constructor() {
        this.customers = [];
        this.bankAccounts = [];
    }

    addCustomer(obj: Customer) {
        this.customers.push(obj);
    }

    addAccountNumber(obj: BankAccount) {
        this.bankAccounts.push(obj);
    }

    transaction(accountNumber: number, balance: number) {
        const index = this.bankAccounts.findIndex((acc) => acc.accountNumber === accountNumber);
        if (index !== -1) {
            this.bankAccounts[index].balance = balance;
        }
    }
}

const myBank = new Bank();
// create customer
for (let i: number = 1; i <= 2; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const mobileNumber = parseInt(faker.phone.phoneNumberFormat(0));
    const cus = new Customer(firstName, lastName, 25 * i, "male", mobileNumber, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accountNumber: cus.accountNumber, balance: 100000 * i });
}
// property 'name' does not exeit on typeof import
async function BankService(bank: Bank) {
    do {
        const service = await inquirer.prompt({
            type: 'list',
            name: 'select',
            message: 'Select the option',
            choices: ['view balance', 'Withdraw', 'Deposit', 'exit']
        });

        // View balance
        if (service.select === 'view balance') {
            const response = await inquirer.prompt({
                type: 'input',
                name: 'num',
                message: 'Enter the account number'
            });

            const account = bank.bankAccounts.find((acc) => acc.accountNumber === parseInt(response.num));

            if (!account) {
                console.log(chalk.red.italic("Invalid Account Number"));
            }

            if (account) {
                const ans = await inquirer.prompt({
                    type: 'number',
                    message: 'Enter the amount to deposit',
                    name: 'Rs'
                });

                if (ans.Rs > account.balance) {
                    console.log(chalk.red.bold("Insufficient Balance"));
                }

                const newBalance = account.balance + ans.Rs;
                bank.transaction(account.accountNumber, newBalance);
                console.log(newBalance);
            }

            if (account) {
                const customer = myBank.customers.find((item) => item.accountNumber === account.accountNumber);

                if (customer) {
                    console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
                }
            }
        }

        // Withdraw
        if (service.select === 'Withdraw') {
            const response = await inquirer.prompt({
                type: 'input',
                name: 'num',
                message: 'Enter the account number'
            });

            const account = bank.bankAccounts.find((acc) => acc.accountNumber === parseInt(response.num));

            if (!account) {
                console.log(chalk.red.italic("Invalid Account Number"));
            }

            if (account) {
                const ans = await inquirer.prompt({
                    type: 'number',
                    message: 'Enter the amount to withdraw',
                    name: 'Rs'
                });

                if (ans.Rs > account.balance) {
                    console.log(chalk.red.bold("Insufficient Balance"));
                }

                const newBalance = account.balance - ans.Rs;
                bank.transaction(account.accountNumber, newBalance);
                console.log(newBalance);
            }

            if (account) {
                const customer = myBank.customers.find((item) => item.accountNumber === account.accountNumber);

                if (customer) {
                    console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
                }
            }
        }

        // Deposit
        if (service.select === 'Deposit') {
            const response = await inquirer.prompt({
                type: 'input',
                name: 'num',
                message: 'Enter the account number'
            });

            const account = bank.bankAccounts.find((acc) => acc.accountNumber === parseInt(response.num));

            if (!account) {
                console.log(chalk.red.italic("Invalid Account Number"));
            }

            if (account) {
                const ans = await inquirer.prompt({
                    type: 'number',
                    message: 'Enter the amount to deposit',
                    name: 'Rs'
                });

                const newBalance = account.balance + ans.Rs;
                bank.transaction(account.accountNumber, newBalance);
                console.log(newBalance);
            }

            if (account) {
                const customer = myBank.customers.find((item) => item.accountNumber === account.accountNumber);

                if (customer) {
                    console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
                }
            }
        }

        if (service.select === 'exit') {
            return;
        }
    } while (true);
}

BankService(myBank);
