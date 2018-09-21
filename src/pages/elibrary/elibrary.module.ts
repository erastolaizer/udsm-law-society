import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElibraryPage } from './elibrary';

@NgModule({
  declarations: [
    ElibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(ElibraryPage),
  ],
})
export class ElibraryPageModule {}
