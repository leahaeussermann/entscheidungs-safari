import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SendmailService} from '../../core/services/rest/sendmail.service';
import {Subscription} from 'rxjs';
import {MailBodyModel} from '../../core/models/mail-body.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  form: FormGroup;
  private subscriptions: Subscription[] = [];
  invalidCredentials = false;
  mailIsSent = false;
  mailNotSent = false;
  isLoading = false;

  constructor(private fb: FormBuilder,
              private mailService: SendmailService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', Validators.required],
      comment: ['']
    });
  }

  ngOnInit() {

  }

  sendMessage() {
    if (this.form.valid) {
      const body: MailBodyModel = {
        email: this.form.value.email,
        messageText: this.form.value.comment,
        name: this.form.value.fullname
      };
      this.isLoading = true;
      this.subscriptions.push(this.mailService.sendMails(body).subscribe((res) => {
        if (res.status === 200) {
          this.mailIsSent = true;
          this.isLoading = false;
          setTimeout(() => {
            this.mailIsSent = false;
          }, 3000);
        } else {
          this.mailNotSent = true;
          this.isLoading = false;
        }
      }));
    } else {
      this.invalidCredentials = true;
      setTimeout(() => {
        this.invalidCredentials = false;
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  openSecurityInfo() {

  }
}
