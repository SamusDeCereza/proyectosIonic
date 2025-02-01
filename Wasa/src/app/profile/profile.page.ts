import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  goToSettings() {
    this.navController.navigateForward("/settings"); 
  }

}
