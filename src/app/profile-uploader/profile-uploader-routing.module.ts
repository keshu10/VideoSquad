import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUploaderPage } from './profile-uploader.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUploaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUploaderPageRoutingModule {}
