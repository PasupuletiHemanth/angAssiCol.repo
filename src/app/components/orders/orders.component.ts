import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/model/IOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[];
  cols: any[];
  tempOrders: IOrder[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orders = [];
    this.tempOrders = [];
    /*this.ordersService.getOrdersTest().then(orders => this.orders = orders.filter(function (item) {
      return item.custName.startsWith("Sample Name1");
    }));*/

    this.ordersService.getOrders()
              .subscribe( (resp: IOrder[]) => {
                console.log(resp);
                for(let re of resp)
                {
                  this.orders.push(re);
                  this.tempOrders.push(re);
                }
                //this.orders = resp;
                
              });

    this.cols = [
      { field: 'orderNo', header: 'Order No' },
      { field: 'custName', header: 'Customer Name' },
      { field: 'handOverPoint', header: 'Handover Point' }
    ];

    console.log("before for");
    console.log(this.orders);
    for (let ord in this.orders) {
      console.log("in for");
    }
  }

  test() {
    console.log("intest");
    console.log(this.orders[0].orderNo);
    this.orders= this.orders.filter(function (item) {
      return item.custName.startsWith("Sample Customer Name1");
    })
    console.log(this.orders);
  }

  onsearchHandler(form)
  {
    this.orders=this.tempOrders;
    console.log(form);
    console.log(form.value);
    this.orders= this.orders.filter(function (item) {
      return item.custName.toLowerCase().startsWith(form.value.custName.toLowerCase());
    })
  }
}