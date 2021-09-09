import { Component, OnInit } from '@angular/core';
import Company from 'src/app/main/configs/company';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CurrentUser from 'src/app/main/configs/user';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent extends URLLoader implements OnInit {

  company = new Company()
  user = new CurrentUser()
  configuration$
  constructor(private httpService:HTTPService) { super() }

  ngOnInit(): void {
    super.loadScripts()
    this.getAll()
  }


   getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/category/all")
     .subscribe((data)=>{
       this.configuration$=data[0] 
     })
  }

}
