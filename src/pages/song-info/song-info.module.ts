import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SongInfoPage } from './song-info';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    SongInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SongInfoPage),
    Http
  ],
})
export class SongInfoPageModule {}
