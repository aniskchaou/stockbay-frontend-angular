import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import CategoryValidation from 'src/app/main/validations/CategoryValidation';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent extends URLLoader implements OnInit {

  categoryForm: FormGroup
  msg: CategoryMessage
  submitted = false


  get f() { return this.categoryForm.controls; }

  constructor(private httpService:HTTPService,  
     private validation: CategoryValidation, 
     private message: CategoryMessage,
    private categoryTestService: CategoryTestService) {
    super()
    this.categoryForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.categoryForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
     this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/category/create",this.categoryForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
      window.location.reload();
    }
  }
}
