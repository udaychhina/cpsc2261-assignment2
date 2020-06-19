import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionComponent } from '../transaction/transaction.component';

class Register {
	transactions: Transaction[] = [];

	constructor() {
	
		// let t = new Transaction(new Date(), "grocery", "Mom", 4.00);
		// this.transactions.push(t);
		// t = new Transaction(new Date(), "electronics", "Dad", 13.00);
		// this.transactions.push(t);
		// t = new Transaction(new Date(), "electronics", "Dad", -7.00);
		// this.transactions.push(t);
	}
	balance(): number {
		let balance: number = 0;
		for(let i = 0; i < this.transactions.length; i++) {
			balance += this.transactions[i].credit;
		}
		return balance; 
	}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	register = new Register();

	newTrans(): void {
		let date = (<HTMLInputElement>document.getElementById('date')).value;
		let description = (<HTMLInputElement>document.getElementById('description')).value;
		let account = (<HTMLInputElement>document.getElementById('account')).value;
		let credit = +(<HTMLInputElement>document.getElementById('credit')).value;

		this.register.transactions.push(new Transaction(new Date(date), description, account, credit));
	}

	constructor() { 

	}

	ngOnInit(): void {
		
	}

}
