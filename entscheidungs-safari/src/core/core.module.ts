import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SendmailService} from './services/rest/sendmail.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule
  ],
  providers: [
    SendmailService
  ]
})

export class CoreModule {
}
