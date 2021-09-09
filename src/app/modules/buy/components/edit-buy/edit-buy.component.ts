import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyTestService from 'src/app/main/mocks/BuyTestService';
import Buy from 'src/app/main/models/Buy';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-buy',
  templateUrl: './edit-buy.component.html',
  styleUrls: ['./edit-buy.component.css']
})
export class EditBuyComponent extends URLLoader implements OnInit {


  model: Buy


  constructor(private httpService:HTTPService,private buyTestService: BuyTestService,
    private message: BuyMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Buy(0, '', '', '', '')
  }

  ngOnInit(): void {

    this.buyTestService.ID.subscribe(idd => {

     /* this.model = this.buyTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }*/
       console.log(idd)
      this.httpService.get(URLS.URL_BASE +URLS.URL_PORT+"/stockbay/buy/" + idd).subscribe(
        (data:Buy)=>{
          this.model=data
          console.log(this.model)
        }
      )
    })
  }

  edit() {
    //this.buyTestService.update(this.model)
   // this.httpService.update(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/")
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
