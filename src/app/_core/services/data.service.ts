import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  layDanhSachKhoaHocAPI(): Observable<any>{
    return this.http.get(
      'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
      ).pipe(
        tap(()=>{}),
        catchError((error:any)=>{
          return this.handleError(error);
        })
      );
  }

  layThongTinKhoaHocAPI(id:any): Observable<any>{
    return this.http.get(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    ).pipe(
      tap(()=>{}),
      catchError((error:any)=>{
        return this.handleError(error);
      })
    );
  }

  registerAPI(user:any){
    return this.http.post(
      'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      user
    ).pipe(
      tap(()=>{}),
      catchError((error:any)=>{
        return this.handleError(error);
      })
    );
  }

  handleError(error:any){
    // dinh nghia tat ca cac loi gap khi call api theo dang switch case
    switch (error.status) {
      case 300:
        break;
      case 401:
        // thieu token cua client
        break;
      case 403:
        //  token k dung quyen quan tri khi gui token client
        break;
      case 500:
        alert(error.error)
        break;
      default:
        break;
    }
    return throwError(error);
  }

}
