import { Component, OnInit } from '@angular/core';
interface Product {
  SNo:string,
  name:string,
  image:string,
  price:number,
  Qut:number
}


@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit {

  public products: Product[] = [
    {
    SNo: "A01",
    name: "M I watch",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Qut: 2,
    price: 1200

  },
  {
    SNo: "A02",
    name: "Max watch",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Qut: 2,
    price: 1500

  },
  {
    SNo: "A03",
    name: " Sonata watch",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Qut: 2,
    price: 399

  },
  {
    SNo: "A04",
    name: " Sony  watch",
    image: "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Qut: 2,
    price: 733
  },]
;
  constructor() { }

  ngOnInit(): void {
  }

public IncreQut(productid:string):void{
  this.products=this.products.map((product:Product)=>{
if(product.SNo==productid){
return {
  ...product,
  Qut:product.Qut+1
}
}return product;

  })
}
public DecreQut(productid:string):void{
  this.products=this.products.map((product:Product)=>{
if(product.SNo==productid){
return {
  ...product,
  Qut:product.Qut-1>0?product.Qut-1:1
}
}return product;

  })
}
public calcGrantTotal():number{
  let total:number=0;
  for(let product of this.products){
    total +=(product.Qut*product.price);
  }
  return total;
}

}


