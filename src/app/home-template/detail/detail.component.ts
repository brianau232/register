import { Component, OnInit } from '@angular/core';
import { DataService } from './../../_core/services/data.service'
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  khoaHoc:any;

  constructor(private data : DataService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
      this._layThongTinKhoaHoc()
  }

  _layThongTinKhoaHoc(){
    // lay 1 param tren url
    const id = this.activatedRoute.snapshot.paramMap.get("id")

    // lay nhiu params tren url
    this.activatedRoute.queryParams.subscribe((el:any)=>{
      console.log(el);
      
    })
    this.data.layThongTinKhoaHocAPI(id).subscribe((result:any)=>{
      this.khoaHoc = result;
    })
  }
}
