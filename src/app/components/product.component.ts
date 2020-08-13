import { 
  Component,
  OnInit ,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnChanges, OnDestroy{

  @Input() product: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1.-constructor');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('2.- ngOnChanges');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('3.- ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('4.- ngOnDestroy');
  }

  addCart(){
    console.log('agregado al carrito');
    this.productClicked.emit(this.product.id);
  }

}
