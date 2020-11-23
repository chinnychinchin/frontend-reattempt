import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../model';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  @Input() cart: CartItem[]
  @Output() retrieveDetails = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(id) {
    this.retrieveDetails.next(id)
  }

}
