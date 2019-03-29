import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
//import { LogBase } from './logger.service';
import { Http } from '@angular/http';

@Injectable()
export class ConfigService implements OnInit {

  url: any;
  public supportEmail: any;

  constructor(
    //private log: LogBase,
    private http: Http
  ) { 

    this.url = environment.url;
    this.supportEmail = environment.supportEmail;
  }

  async ngOnInit() {}

  getServerUrl() {
    return this.url;
  }

  async test(url) {
    try {
      const res = await this.http.get(url).toPromise();
      return res.status;
    } catch (error) {
      //this.log.error(error);
    }
  }
}
