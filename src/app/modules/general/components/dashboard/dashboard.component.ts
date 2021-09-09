import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  extends URLLoader implements OnInit {

  products$
  expense$
  income$
  employee$

  constructor(private httpService:HTTPService) { 
    super()
  }

  private myScripts = [
         'https://code.jquery.com/jquery-2.2.4.min.js',
      '../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
      '../assets/vendor/js-cookie/js.cookie.js',
      '../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js',
      '../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js',
      '../assets/js/init.js',
      '../assets/js/notification.js',
    
    
 
];
 loadScripts() {
    let container=document.getElementsByTagName('app-root')[0];
    let promise = Promise.resolve();
    for (let url of this.myScripts) {
        promise = promise.then(_ => new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.async = false;
            script.defer = false;
            script.onload = () => { resolve(); }
            script.onerror = (e) => { reject(e); }
            container.appendChild(script);
        }));
    }
}
  

ngOnInit(): void {
 
   this.loadScripts()
  let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
  let data2 = [43000, 53000, 34000, 38000, 66000, 77000, 53000];
  let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var ctx1 = document.getElementsByClassName("revenue-chart");
  var ctx2 = document.getElementsByClassName("product-chart");
  this.renderChart(data, labels,ctx1,'rgba(204, 0, 0, 1)');
  this.renderChart(data2, labels, ctx2, 'rgba(24, 0, 204, 1)');
  this.getEmployeeSize()
  this.getExpenseSize()
  this.getProductSize()
  this.getIncomeSize()

}



 getEmployeeSize() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/employee/size")
     .subscribe((data)=>{
       this.employee$=data
      
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

  getExpenseSize() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/expense/size")
     .subscribe((data)=>{
       this.expense$=data
      
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

  getIncomeSize() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/income/size")
     .subscribe((data)=>{
       this.income$=data
      
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

   getProductSize() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/size")
     .subscribe((data)=>{
       this.products$=data
      
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }
 renderChart(data, labels,ctx,color) {
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '',
              data: data,
              backgroundColor: color ,
              borderColor: color,
          }]
      },
  });
}

}
