import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  goToHome() {
    this.navController.navigateForward("/home"); 
  }

  goToProfile() {
    this.navController.navigateForward("/profile"); 
  }

}
