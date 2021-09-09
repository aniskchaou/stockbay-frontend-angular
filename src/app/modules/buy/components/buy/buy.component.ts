import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyTestService from 'src/app/main/mocks/BuyTestService';
import Buy from 'src/app/main/models/Buy';
import Category from 'src/app/main/models/Category';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  buys$:Buy[]=[{
    "id":0,
     "supplier": "",
        "purchase_invoiceNo": "",
        "purchase_status": "",
        "purchase_date": "",
      }]
  id = 0


  constructor(private httpService:HTTPService, 
    private buyTestService: BuyTestService,
     private messageService: BuyMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.buyTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/buy/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/buy/all")
     .subscribe((data:Buy[])=>{
       this.buys$=data
       console.log(this.buys$)
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

  
}
