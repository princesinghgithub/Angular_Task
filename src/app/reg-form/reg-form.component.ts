import { Component, OnInit } from '@angular/core';

interface User{
  name:string;
  email:string;
  password:string;
  desigination:string;
  bio:string,
  terms:boolean
  
}


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  public user:User={
    name:'',
    email:'',
    password:'',
    desigination:'',
    bio:'',
    terms:false
  }


  constructor() { }

  ngOnInit(): void {
  }
  
public submitRegister():void{
  console.log(this.user)
}


}
