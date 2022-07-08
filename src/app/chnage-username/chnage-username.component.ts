import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chnage-username',
  templateUrl: './chnage-username.component.html',
  styleUrls: ['./chnage-username.component.css']
})
export class ChnageUsernameComponent implements OnInit {

public username:string="naveen"

  constructor() { }

  ngOnInit(): void {
  }
  updateInput(event:any):void{
this.username=event.target.value;
  }

}
