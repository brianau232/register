import { Component, OnInit } from '@angular/core';
import { DataService } from './../../_core/services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dskh = [];

  constructor(private data : DataService ) { }

  ngOnInit(): void {
    // LifeCycle chay 1 lan duy nhat tuong duong vs didmount ben react
    this._layDanhSachKhoaHoc()
  }

  _layDanhSachKhoaHoc (){
    this.data.layDanhSachKhoaHocAPI().subscribe((result:any)=>{
      console.log(result);
      this.dskh = result;
    })
  }
}
