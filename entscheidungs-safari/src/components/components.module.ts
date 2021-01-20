import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader, MyMissingTranslationHandler } from '../core/configs/translation-config';
import { HttpClient } from '@angular/common/http';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false
    })
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ComponentsModule {
}
