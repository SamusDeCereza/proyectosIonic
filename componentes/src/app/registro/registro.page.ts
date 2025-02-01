import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  constructor(private navController : NavController) { }

  ngOnInit() {
  }

  clickRegistro(){

  }

  clickIniciarSesion(){
    this.navController.navigateBack('/home');
  }

}
