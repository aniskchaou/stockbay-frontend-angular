import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/main/models/Stock';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  stock$:Stock[]=[{
        "id": 1,
        "name": "",
        "status": "",
        "details": ""
    }]
  constructor(private httpService:HTTPService) {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
 this.getAll()
}

 getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/warehouse/all")
     .subscribe((data:Stock[])=>{
       this.stock$=data
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
