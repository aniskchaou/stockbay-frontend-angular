import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import Expense from 'src/app/main/models/Expense';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent extends URLLoader implements OnInit {


  expenses$:Expense[]=[{ id: 1,
        "expense_paymentDate": "",
        "supplier_id": "",
        "expense_paymentType": "",
        "expense_paymentAccount": "",
        "expense_amount": "",
        "expense_details": ""}]
  id = 0


  constructor(private httpService:HTTPService,
    private expenseTestService: ExpenseTestService,
     private messageService: ExpenseMessage) {
      super()

    }
  
  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.expenseTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want to delete this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/expense/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
      window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/expense/all")
     .subscribe((data:Expense[])=>{
       this.expenses$=data
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
