import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import Income from 'src/app/main/models/Income';
import Revenue from 'src/app/main/models/Revenue';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent extends URLLoader implements OnInit {

 
  
  revenues$:Revenue[]=[{ "id": 1,
        "income_paymentDate": "",
        "customer_id": "",
        "income_paymentType": "",
        "income_paymentAccount": "",
        "income_amount": "",
        "income_details": ""}]
  id = 0


  constructor(private httpService:HTTPService, 
     private revenueTestService: RevenueTestService,
      private messageService: RevenueMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.revenueTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/revenue/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
      window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/revenue/all")
     .subscribe((data:Revenue[])=>{
       this.revenues$=data
       
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }


}
