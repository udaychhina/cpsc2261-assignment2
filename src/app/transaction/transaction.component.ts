import { Component, Input, OnInit } from '@angular/core';

export class Transaction {
	date: Date = new Date();
	description: string = '';
	account: string =  '';
	credit: number = 0;
	constructor(date: Date, description: string, account: string, credit: number) {
		this.date = date;
		this.description = description;
		this.account = account;
		this.credit = credit;
	}
}

@Component({
  selector: '[app-transaction]',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
	@Input() transaction: Transaction;
	constructor() { 
	}

	ngOnInit(): void {
		
	}
}
