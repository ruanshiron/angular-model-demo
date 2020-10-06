import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private url = "https://5f7c20b400bd74001690a464.mockapi.io/api/v1/model"

  constructor(private http: HttpClient) { }

  getData() {
    let data = null
    return this.http.post(this.url, data)
  }
}
