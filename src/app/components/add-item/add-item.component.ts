import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  title:string='';
  price:number=0;
  quantity:number=0;
  id:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title= this.title;
    item.price= this.price;
    item.quantity=this.quantity
    item.completed=false
  }

}
