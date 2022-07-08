import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  images:any = [
    { img:'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , c:'Maxigo'},
  {img:'https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',c:'Span'},
{img:'https://images.pexels.com/photos/4429334/pexels-photo-4429334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',c:'Amerca'},
{img:'https://images.pexels.com/photos/4430314/pexels-photo-4430314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',c:'Narve'}]

  // public tourName:string='paris';
 
  public time:string=new Date().toLocaleDateString();

  constructor() { }

  ngOnInit(): void {

  }


  public getDate():string{
    return new Date().toLocaleDateString();
  }
}
