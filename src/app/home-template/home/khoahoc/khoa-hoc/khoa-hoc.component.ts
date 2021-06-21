import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss']
})
export class KhoaHocComponent implements OnInit {

  @Input() khoaHoc :any;
  constructor() { }

  ngOnInit(): void {
  }

}
