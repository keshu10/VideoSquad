import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestureController, ToastController } from '@ionic/angular';
import { GestureDetail } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  slideOpts = {
    direction: 'vertical'
  };

  constructor(private router: Router,
    private gestureCtrl: GestureController,
    public toastController: ToastController) {}

  goToProfile() {
    let self = this;
    this.router.navigate(['/profile-uploader']);
  }

  ngAfterViewInit() {
    const profilePageElm = document.getElementById('profilePage');

    if (profilePageElm) {
      // manage gesture to detect swipe left/right
      const gesture = this.gestureCtrl.create({
        el: profilePageElm,
        gestureName: 'productDetail-gesture',
        // onMove: (detail) => { this.onMove(detail); },
        // onStart: () => { this.onStart(); },
        onEnd: (detail) => { this.onEnd(detail); }
      });

      gesture.enable();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your have subscribed now.',
      duration: 2000
    });
    toast.present();
  }

  private onEnd(detail: GestureDetail) {

    // change product display on swipe left or right
    if (detail.deltaX > 0) {
      // gesture swipe towards left side
      this.presentToast();
    } else {
      // gesture swipe towards right side
      this.router.navigate(['/profile-uploader']);
    }
  }

}
