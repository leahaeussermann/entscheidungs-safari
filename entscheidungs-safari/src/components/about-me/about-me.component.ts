import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToSafari() {
    this.router.navigate(['/safari']);
  }

  openSecurityInfo() {
    this.router.navigate(['/data-security']);
  }

  openImpressum() {
    this.router.navigate(['/impressum']);
  }
}
