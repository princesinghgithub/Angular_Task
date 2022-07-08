import { Component, OnInit } from '@angular/core';
interface Product {
  SNo: string,
  name: string,
  img: string,
  qut: number,
  price: number

}


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  // public product: Product = {
  //   SNo: "A01",
  //   name: "M I watch",
  //   img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   qut: 2,
  //   price: 1500

  // };



  constructor() { }

  ngOnInit(): void {
  }

// public increQuatity():void{
//   this.product={
// ...this.product,
// qut:this.product.qut+1
//   }
// }
// public DecreQuatity():void{
//   this.product={
// ...this.product,
// qut:this.product.qut-1>0? this.product.qut-1:1
//   }
// }}
}