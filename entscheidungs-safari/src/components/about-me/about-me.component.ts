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

  redirectToContact() {

  }

  openSecurityInfo() {
    this.router.navigate(['/data-security']);
  }
}
