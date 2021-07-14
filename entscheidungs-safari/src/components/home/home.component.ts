import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }

  openSecurityInfo() {
    this.router.navigate(['/data-security']);
  }
  openImpressum() {
    this.router.navigate(['/impressum']);
  }

  openCalendly() {
    window.open('https://calendly.com/entscheidungssafari', '_blank');
  }
}
