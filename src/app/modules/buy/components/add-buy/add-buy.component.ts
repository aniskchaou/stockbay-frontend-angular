import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyValidation from 'src/app/main/validations/BuyValidation'
import BuyTestService from 'src/app/main/mocks/BuyTestService'
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import Supplier from 'src/app/main/models/Supplier';
import Product from 'src/app/main/models/Product';

@Component({
  selector: 'app-add-buy',
  templateUrl: './add-buy.component.html',
  styleUrls: ['./add-buy.component.css']
})

export class AddBuyComponent extends URLLoader implements OnInit {

  buyForm: FormGroup
  msg: BuyMessage
  submitted = false
  suppliers$:Supplier[]=[]
  products$:Product[]=[]

  get f() { return this.buyForm.controls; }

  constructor(private httpService:HTTPService ,
    private validation: BuyValidation, 
    private message: BuyMessage, 
    private buyTestService: BuyTestService) {
    super()
    this.buyForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllSuppliers()
  }

  reset() {
    this.buyForm.reset()
  }

  add() {
    
    this.submitted = true;
    this.buyForm.value.supplier=this.suppliers$.filter(x => 
    x.id == parseInt(this.buyForm.value.supplier))[0]
    this.buyForm.value.product_id=this.products$.filter(x => 
    x.id == parseInt(this.buyForm.value.product_id))[0]

    if (this.validation.checkValidation()) {
      this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/buy/create",this.buyForm.value)    
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


  getAllProducts() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/all")
     .subscribe((data:Product[])=>{
       this.products$=data   
     })
  }

}
