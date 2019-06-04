import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../model/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders()
  {
    return this.http.get<any>('assets/data/order.json')
      .toPromise()
      .then(res => <IOrder[]>res.data)
      .then(data => { return data; });
  }
}
