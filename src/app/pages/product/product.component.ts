import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit()
  {
    this.api.getProducts().subscribe((data:any)=>{this.products=data})
  }

}
