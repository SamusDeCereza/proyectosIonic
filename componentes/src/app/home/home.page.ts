import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  email: string = '';
  password: string = '';


  constructor(private navCtrl: NavController,
    private toastController: ToastController,) {}


  clickSesion(){
    if(this.email == "cereza@gmail.com" && this.password == "contra"){
      this.navCtrl.navigateRoot('/componentes');
    }
    else{
      
      this.presentToast("top");
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Email o contrasenia incorrecta',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  clickRegistrarse(){
    this.navCtrl.navigateForward('/registro');
  }

}
