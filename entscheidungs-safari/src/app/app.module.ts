import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {translationInitializerFactory} from '../core/configs/translation-config';
import {ComponentsModule} from '../components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translationInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule,
    ComponentsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
