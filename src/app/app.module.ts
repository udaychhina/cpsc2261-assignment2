import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionComponent } from './transaction/transaction.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  	declarations: [
		AppComponent,
		TransactionComponent,
		RegisterComponent
  	],
  	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
