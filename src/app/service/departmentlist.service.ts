import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/Department/"
  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseurl + `GetAllDepartments`)
  }
  postDepartment(data:any){
    return this.http.post("https://localhost:7161/Department/Create",{data})
  }

}
