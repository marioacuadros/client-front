import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  URL =  GlobalConstants.apiURL;
  getClient(docType:string, docNumber:string) {
    return this.http.get(`${this.URL}client?docType=${docType}&docNumber=${docNumber}`);
  }
}
