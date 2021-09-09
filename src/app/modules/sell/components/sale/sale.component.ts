import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import SellMessage from 'src/app/main/messages/SellMessage';
import SaleTestService from 'src/app/main/mocks/SaleTestService';
import Sell from 'src/app/main/models/Sell';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent extends URLLoader implements OnInit {


  
  sells$:Sell[]=[{
   "id": 1,
        "customer_id": "",
        "sale_date": "",
        "sale_status": "",
        "sale_invoiceNo": ""
  }]
  id = 0


  constructor(private httpService:HTTPService,private sellTestService: SaleTestService, private messageService: SellMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.sellTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/sell/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
     window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/sell/all")
     .subscribe((data:Sell[])=>{
       this.sells$=data
       
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
