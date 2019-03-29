import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { ConfigService } from './config.service';
// import {AuthManager} from './auth.manager';
// import {AuthService} from './auth.service';
// import { LogBase } from './logger.service';
import * as _ from 'lodash';

@Injectable()
export class WebApiService {

  constructor(
    private http: Http,
    private config: ConfigService
  ) { }

  async post(user: string, apiUrl: string, variables: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Token', window.localStorage.getItem('token'));
    headers.append('Device', window.localStorage.getItem('device'));
    headers.append('Id', window.localStorage.getItem('id'));
    try {
      const response = await this.http.post(apiUrl, variables, {headers: headers}).toPromise();
      if (response.status === 200) {
        const res = response.json();
        if (res.errorCode === 0 || res.errorCode === 15) {
          res.result = JSON.parse(res.result);
          //this.authManager.updateSession(res);
          return res;
        } else {
          return false;
        }
      }
    } catch (error) {
      return error.json();
    }
  }
}