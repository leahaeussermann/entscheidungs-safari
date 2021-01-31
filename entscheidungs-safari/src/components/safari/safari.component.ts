import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.scss']
})
export class SafariComponent implements OnInit {
  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }

  openSecurityInfo() {
    this.router.navigate(['/data-security']);
  }
}
