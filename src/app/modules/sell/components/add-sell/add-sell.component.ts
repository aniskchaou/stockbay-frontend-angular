import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import SellMessage from 'src/app/main/messages/SellMessage';
import SaleTestService from 'src/app/main/mocks/SaleTestService';
import Client from 'src/app/main/models/Client';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import SellValidation from 'src/app/main/validations/SellValidation';

@Component({
  selector: 'app-add-sell',
  templateUrl: './add-sell.component.html',
  styleUrls: ['./add-sell.component.css']
})
export class AddSellComponent extends URLLoader implements OnInit {

  sellForm: FormGroup
  msg: SellMessage
  submitted = false
  clients$:Client[]=[]

  get f() { return this.sellForm.controls; }

  constructor(private httpService:HTTPService,
    private validation: SellValidation, 
    private message: SellMessage, 
    private SellTestService: SaleTestService) {
      
    super()
    this.sellForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllClients()
  }

  reset() {
    this.sellForm.reset()
  }

  add() {
    this.submitted = true; 
    this.sellForm.value.customer_id=this.clients$.filter(x => 
    x.id == parseInt(this.sellForm.value.customer_id))[0]

    if (this.validation.checkValidation()) {
     this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/sell/create",this.sellForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
      window.location.reload();
    }
  }

   getAllClients() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/client/all")
     .subscribe((data:Client[])=>{
       this.clients$=data
     })
    }


}
