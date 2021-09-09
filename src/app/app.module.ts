import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AddBuyComponent } from './modules/buy/components/add-buy/add-buy.component';
import { BuyComponent } from './modules/buy/components/buy/buy.component';
import { EditBuyComponent } from './modules/buy/components/edit-buy/edit-buy.component';
import { ViewBuyComponent } from './modules/buy/components/view-buy/view-buy.component';
import { AddCategoryComponent } from './modules/category/components/add-category/add-category.component';
import { CategoryComponent } from './modules/category/components/category/category.component';
import { EditCategoryComponent } from './modules/category/components/edit-category/edit-category.component';
import { ViewCategoryComponent } from './modules/category/components/view-category/view-category.component';
import { AddClientComponent } from './modules/client/components/add-client/add-client.component';
import { ClientComponent } from './modules/client/components/client/client.component';
import { EditClientComponent } from './modules/client/components/edit-client/edit-client.component';
import { ViewClientComponent } from './modules/client/components/view-client/view-client.component';
import { AddEmployeeComponent } from './modules/employee/components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './modules/employee/components/edit-employee/edit-employee.component';
import { EmployeeComponent } from './modules/employee/components/employee/employee.component';
import { ViewEmployeeComponent } from './modules/employee/components/view-employee/view-employee.component';
import { AddExpenseComponent } from './modules/expense/components/add-expense/add-expense.component';
import { EditExpenseComponent } from './modules/expense/components/edit-expense/edit-expense.component';
import { ExpenseComponent } from './modules/expense/components/expense/expense.component';
import { ViewExpenseComponent } from './modules/expense/components/view-expense/view-expense.component';
import { ConfigurationComponent } from './modules/general/components/configuration/configuration.component';
import { DashboardComponent } from './modules/general/components/dashboard/dashboard.component';
import { EditprofileComponent } from './modules/general/components/editprofile/editprofile.component';
import { ProfileComponent } from './modules/general/components/profile/profile.component';
import { AddProductComponent } from './modules/product/components/add-product/add-product.component';
import { ProductComponent } from './modules/product/components/product/product.component';
import { ViewProductComponent } from './modules/product/components/view-product/view-product.component';
import { EditRevenueComponent } from './modules/revenue/components/edit-revenue/edit-revenue.component';
import { RevenueComponent } from './modules/revenue/components/revenue/revenue.component';
import { ViewRevenueComponent } from './modules/revenue/components/view-revenue/view-revenue.component';
import { SaleComponent } from './modules/sell/components/sale/sale.component';
import { AddSellComponent } from './modules/sell/components/add-sell/add-sell.component';
import { EditSellComponent } from './modules/sell/components/edit-sell/edit-sell.component';
import { ViewSellComponent } from './modules/sell/components/view-sell/view-sell.component';
import { EditStockComponent } from './modules/stock/components/edit-stock/edit-stock.component';
import { StockComponent } from './modules/stock/components/stock/stock.component';
import { ViewStockComponent } from './modules/stock/components/view-stock/view-stock.component';
import { AddSupplierComponent } from './modules/supplier/components/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './modules/supplier/components/edit-supplier/edit-supplier.component';
import { SupplierComponent } from './modules/supplier/components/supplier/supplier.component';
import { ViewSupplierComponent } from './modules/supplier/components/view-supplier/view-supplier.component';
import { EditProductComponent } from './modules/product/components/edit-product/edit-product.component';
import { AddRevenueComponent } from './modules/revenue/components/add-revenue/add-revenue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SideNavigationComponent } from './template/side-navigation/side-navigation.component';
import { ModalBuyComponent } from './modules/buy/components/modal-buy/modal-buy.component';
import { ModalCategoryComponent } from './modules/category/components/modal-category/modal-category.component';
import { ModalEmployeeComponent } from './modules/employee/components/modal-employee/modal-employee.component';
import { ModalRevenueComponent } from './modules/revenue/components/modal-revenue/modal-revenue.component';
import { ModalClientComponent } from './modules/client/components/modal-client/modal-client.component';
import { ModalExpenseComponent } from './modules/expense/components/modal-expense/modal-expense.component';
import { ModalProductComponent } from './modules/product/components/modal-product/modal-product.component';
import { ModalSupplierComponent } from './modules/supplier/components/modal-supplier/modal-supplier.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/general/components/login/login.component';
import { AuthguardService } from './main/security/authguard.service';
import { ModalSaleComponent } from './modules/sell/components/modal-sale/modal-sale.component';


const routes: Routes = [
  { path: 'category', component: CategoryComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'buy', component: BuyComponent, pathMatch: 'full' ,canActivate:[AuthguardService] },
  { path: 'category', component: CategoryComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'client', component: ClientComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'employee', component: EmployeeComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'expense', component: ExpenseComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'product', component: ProductComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'revenue', component: RevenueComponent, pathMatch: 'full' ,canActivate:[AuthguardService] },
  { path: 'sale', component: SaleComponent, pathMatch: 'full' ,canActivate:[AuthguardService] },
  { path: 'stock', component: StockComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'supplier', component: SupplierComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full',canActivate:[AuthguardService] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'configuration', component: ConfigurationComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'editprofile', component: EditprofileComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }]


@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    NavigationComponent,
    ProductComponent,
    SupplierComponent,
    ClientComponent,
    EmployeeComponent,
    RevenueComponent,
    ExpenseComponent,
    StockComponent,
    CategoryComponent,
    BuyComponent,
    SaleComponent,
    ProfileComponent,
    EditprofileComponent,
    AddProductComponent,
    AddSupplierComponent,
    AddClientComponent,
    AddEmployeeComponent,
    AddExpenseComponent,
    AddCategoryComponent,
    AddBuyComponent,
    AddSellComponent,
    EditBuyComponent,
    EditCategoryComponent,
    EditClientComponent,
    EditEmployeeComponent,
    EditExpenseComponent,
    EditRevenueComponent,  
    EditSellComponent,
    EditStockComponent,
    EditSupplierComponent,
    ViewBuyComponent,
    ViewCategoryComponent,
    ViewClientComponent,
    ViewEmployeeComponent,
    ViewExpenseComponent,
    ViewProductComponent,
    ViewRevenueComponent,
    ViewSellComponent,
    ViewStockComponent,
    ViewSupplierComponent,
    EditProductComponent,
    AddRevenueComponent,
    HeaderComponent,
    FooterComponent,
    SideNavigationComponent,
    ModalBuyComponent,
    ModalRevenueComponent,
    ModalClientComponent,
    ModalExpenseComponent,
    ModalProductComponent,
    ModalSupplierComponent,
    ModalRevenueComponent,
    ModalCategoryComponent,
    ModalEmployeeComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ViewCategoryComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    LoginComponent,
    ModalSaleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
