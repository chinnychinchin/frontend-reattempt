import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient) {}

  cart: CartItem[];
  item: CartItem;

  async ngOnInit() {
    
    this.cart = await this.http.get<CartItem []>('http://localhost:3000/cart').toPromise()
  
  }

  async retrieveDetails($event){
    this.item = await this.http.get<CartItem>(`http://localhost:3000/cart/${$event}`).toPromise()
  }

  async updateItem($event) {
    await this.http.put<any>(`http://localhost:3000/cart/${$event.id}`, $event).toPromise();
    this.cart = await this.http.get<CartItem []>('http://localhost:3000/cart').toPromise();
  }
}
