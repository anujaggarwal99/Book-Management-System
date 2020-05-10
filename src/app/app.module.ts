import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from './store/store.module';  // this is added by me
import { RouterModule } from "@angular/router";
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,             // this too
    RouterModule.forRoot ([
      { path: "store",component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart" , component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
        },
      { path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
