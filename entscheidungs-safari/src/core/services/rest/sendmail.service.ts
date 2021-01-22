import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MailBodyModel} from '../../models/mail-body.model';
import {ApiResponseModel} from '../../models/api-response.model';

@Injectable()
export class SendmailService {
  constructor(
    private httpClient: HttpClient) {
  }

  public sendMails(body: MailBodyModel) {
    const url = 'https://glacial-brushlands-67800.herokuapp.com/request';
    // const url = 'http://127.0.0.1:3006/request';
    return this.httpClient.post<ApiResponseModel>(url, body);
  }

}
