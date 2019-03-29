import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { ConfigService } from './config.service';
//import { LogBase } from './logger.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { error } from 'util';
import { WebApiService } from './web.api.service';

@Injectable()
export class ApiService {
  
  apiUrl: string;
  user: string;

  constructor(
    private config: ConfigService,
    private router: Router,
    private http: Http,
    //private Log: LogBase,
    private webApi: WebApiService
  ) { }

  async ngOnInit() {
    this.user = window.localStorage.getItem('username');
  }

  async get(url) {
    try {
      this.apiUrl = await this.config.getServerUrl();
      const response = await this.http.get(this.apiUrl + url).toPromise();
      if (response.status === 200) {
        const res = response.json();
        if (res.errorCode === 0) {
          return res;
        } 
      }
    } catch (error) {
      console.log('could not get data', error);
    }
  }

  async post(url, payload) {
    try {
      this.apiUrl = await this.config.getServerUrl();
      var response = await this.http.post(this.apiUrl + url, payload).toPromise();
      if (response.status === 200) {
        var res = response.json();
        if (res.errorCode === 0) {
          res.result = JSON.parse(res.result);
          return res;
        } else {
          return res.errorMessage;
        }
      }
    } catch (error) {
      console.log('could post data', error);
      return res;
    }
  }

  async getEmployees(){
    try {
      debugger;
      const url = await this.config.getServerUrl() + 'api/Values/getEmployees';
      console.log(url)
      const retval = await this.webApi.post(this.user, url, null);
      if (retval){
        console.log(retval)
      }
    } catch (error) {
      console.log('This shit is not working, fucken shit')
    }
  }
}
