import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/department';
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  getalltrainee(arg0: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:5001/Review"
  
  getReviewById(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:5001/Review/${id}`)
    }


getAllDepartments(){
  let baseurl = "https://localhost:5001/Departments"
  return this.http.get(baseurl) 
}

getReviewByStatus(statusId:number): Observable<any>{
  let baseurl="https://localhost:5001/Review/"
  return this.http.get(baseurl+`Status/${statusId}`)
}

getAllReviewer(id: number): Observable<any>{
  let baseurl="https://localhost:5001/User/"
  return this.http.get<any>(baseurl+`Role/${id}`)
}

getAllUser(did: number,rid:number): Observable<any>{
  let baseurl="https://localhost:5001/User/"
  return this.http.get<any>(baseurl+`GetUsersByDepartmentAndRole/${did},${rid}`)
}

postReview(data:any): Observable<any> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.http.post<any>('https://localhost:5001/Review', data)
}

putReview(data:any): Observable<any> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return this.http.put<any>('https://localhost:5001/Update', data)
}


}
