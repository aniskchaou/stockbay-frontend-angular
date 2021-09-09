import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import EmployeeValidation from 'src/app/main/validations/EmployeeValidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent extends URLLoader implements OnInit {

  employeeForm: FormGroup
  msg: EmployeeMessage
  submitted = false

  

  get f() { return this.employeeForm.controls; }

  constructor(private httpService:HTTPService,
    private validation: EmployeeValidation, 
    private message: EmployeeMessage,
    private ExpenseTestService: EmployeeTestService) {
    super()
    this.employeeForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.employeeForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/employee/create",this.employeeForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
     window.location.reload();
    }
  }

}
