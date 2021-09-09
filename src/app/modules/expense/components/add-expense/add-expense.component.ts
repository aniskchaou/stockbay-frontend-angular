import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import Supplier from 'src/app/main/models/Supplier';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import ExpenseValidation from 'src/app/main/validations/ExpenseValidation';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent extends URLLoader implements OnInit {

  expenseForm: FormGroup
  msg: ExpenseMessage
  submitted = false
  suppliers$:Supplier[]=[]

  get f() { return this.expenseForm.controls; }

  constructor(private httpService:HTTPService,
    private validation: ExpenseValidation, 
    private message: ExpenseMessage,
    private ExpenseTestService: ExpenseTestService) {
    super()
    this.expenseForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllSuppliers()
  }

  reset() {
    this.expenseForm.reset()
  }

  add() {
    this.submitted = true;
    this.expenseForm.value.supplier_id=this.suppliers$.filter(x => 
    x.id == parseInt(this.expenseForm.value.supplier_id))[0]
  
   if (this.validation.checkValidation()) {
     this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/expense/create",this.expenseForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
      window.location.reload();
    }
  }

    getAllSuppliers() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/supplier/all")
     .subscribe((data:Supplier[])=>{
       this.suppliers$=data
      
     })
  }

}
