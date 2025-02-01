import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {


  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    // addIcons({ chatboxOutline, playCircle, radio, search });
  }

  

}
