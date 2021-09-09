import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ClientMessage from 'src/app/main/messages/ClientMessage';
import ClientTestService from 'src/app/main/mocks/ClientTestService';
import Client from 'src/app/main/models/Client';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends URLLoader implements OnInit {


  clients$:Client[]=[{
        "id": 1, "customer_name": "", "customer_email": "",
        "customer_phone": "", "customer_address": "",
        "status_id": "", "customer_description": ""
    }]
  id = 0


  constructor(private httpService:HTTPService ,private clientTestService: ClientTestService, private messageService: ClientMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.clientTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      this.clientTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/client/all")
     .subscribe((data:Client[])=>{
       this.clients$=data
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
