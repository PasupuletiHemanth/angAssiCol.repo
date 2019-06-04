import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/model/IOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:IOrder[];
  cols: any[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.orders=[];
    this.ordersService.getOrders().then(orders=> this.orders=orders.filter(function(item){
      return item.custName.startsWith("Sample Name1");         
  }));
    this.cols = [
      { field: 'orderNo', header: 'Order No' },
      { field: 'custName', header: 'Customer Name' },
      { field: 'handOverPoint', header: 'Handover Point' }
  ];
  alert("before for");
  alert(this.orders);
  for(let ord in this.orders)
  {
    alert("in for");
  }
}
  
  test()
  {
    alert("intest");
    alert(this.orders[0].orderNo);
  }
}
