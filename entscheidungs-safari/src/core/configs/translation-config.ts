import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {Injector} from '@angular/core';
import {LOCATION_INITIALIZED} from '@angular/common';
import {Observable, of} from 'rxjs';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function translationInitializerFactory(translateService: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const browserLang = translateService.getBrowserLang();
      translateService.addLangs(['de', 'en']);
      translateService.setDefaultLang('de');

/*    TODO: use when browser language should be used
      const language = browserLang.match(/en|de/) ? browserLang : 'en';
      translateService.use(language).subscribe(() => {
        console.log(`Loaded translations '${ browserLang }'`);
      }, err => {
        console.log(`Problem with '${ browserLang }' language initialization.'`);
      }, () => {
        resolve(null);
      });*/

      translateService.use('de').subscribe(() => {
        console.log(`Loaded translations`);
      }, err => {
        console.log(`Problem with language initialization.'`);
      }, () => {
        resolve(null);
      });
    });
  });
}
export class FakeLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return of({ TEST: 'This is a test' });
  }
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  public static readonly TRANSLATION_MISSING = 'TRANSLATION_MISSING';

  public handle(params: MissingTranslationHandlerParams) {
    console.error(`ERROR: ${ params.key } is missing in language: ${ params.translateService.currentLang }`);
    return MyMissingTranslationHandler.TRANSLATION_MISSING;
  }
}
