import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader, MyMissingTranslationHandler } from '../core/configs/translation-config';
import { HttpClient } from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutMeComponent
  ],
  imports: [
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
      useDefaultLang: false
    }),
    MatDividerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ComponentsModule {
}
