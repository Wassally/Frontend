import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss']
})
export class NewDeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postOrder(form:NgForm){
    console.log(form)
  }
  
}
