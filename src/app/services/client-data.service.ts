import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  private clientData = new BehaviorSubject<any>(null);
  clientData$ = this.clientData.asObservable();

  updateClientData(data: any) {
    this.clientData.next(data);
  }
}
