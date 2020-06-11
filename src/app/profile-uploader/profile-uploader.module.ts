import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUploaderPageRoutingModule } from './profile-uploader-routing.module';

import { ProfileUploaderPage } from './profile-uploader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUploaderPageRoutingModule
  ],
  declarations: [ProfileUploaderPage]
})
export class ProfileUploaderPageModule {}
