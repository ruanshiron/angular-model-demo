import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private url = "http://192.168.1.250:5000/process"

  constructor(private http: HttpClient) { }

  getData() {
    let data = null
    return this.http.post(this.url, data)
  }
}
