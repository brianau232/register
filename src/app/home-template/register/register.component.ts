import { Component, OnInit } from '@angular/core';
import { DataService } from './../../_core/services/data.service'
@Component({
  selector: 'app-register',
  templateUrl: './register/register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  register(user:any){
    user.maNhom="GP01";
    // console.log(user);
    this.data.registerAPI(user).subscribe((result:any)=>{
      console.log(result);
    })
  }
}
