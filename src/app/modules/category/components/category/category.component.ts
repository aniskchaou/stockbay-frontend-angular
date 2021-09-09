import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import Category from 'src/app/main/models/Category';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {

  categorys$:Category[]=[{
        "id": 0,
        "category_name": "",
        "status_id": "",
        "category_details": ""
    }]
  id = 0


  constructor(private httpService:HTTPService,
    private categoryTestService: CategoryTestService,
     private messageService: CategoryMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
  }

  delete(id) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/category/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/category/all")
     .subscribe((data:Category[])=>{
       this.categorys$=data 
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
