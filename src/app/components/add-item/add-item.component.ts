import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  title:string='';
  price:number=0;
  quantity:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
