import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: CartItem;
  @Output() updateItem = new EventEmitter<CartItem>();
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }

  ngOnChanges() {
    //returns the item object
    this.itemDetailsForm = this.createForm(this.item)
  }
  itemDetailsForm: FormGroup

  
  createForm(item) :FormGroup {
    return this.fb.group({
      id: this.fb.control(item?.id, [Validators.required]),
      item: this.fb.control(item?.item, [Validators.required]),
      quantity: this.fb.control(item?.quantity, [Validators.required])
    })
  }

  onUpdateClick() {
    let updatedItem = this.itemDetailsForm.value as CartItem;
    this.updateItem.next(updatedItem);
    this.itemDetailsForm.reset();
  }
}
