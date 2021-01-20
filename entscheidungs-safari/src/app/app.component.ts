import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entscheidungs-safari';
  isCollapsed = true;
  constructor(public translateService: TranslateService, public router: Router) {
/*    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');*/
/*    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/de|en/) ? browserLang : 'de');*/
  }

  refresh() {
    this.router.navigate(['/home']);
  }
}
