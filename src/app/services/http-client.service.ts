import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Notif } from '../models/Notif';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http:HttpClient) { }

  
  private baseUrl = 'http://localhost:8080/api/v1';

  listNotifs(): Observable<any> { 
    return this.http.get(`${this.baseUrl}/listNotifs`); 
  }
  findNotif(id:number): Observable<Notif> { 
    return this.http.get<Notif>(`${this.baseUrl}/findNotif/${id}`);
  }
  createNotif(notif:Notif): Observable<Object> { 
    return this.http.post<Notif>(`${this.baseUrl}/createNotif`, notif);
  }
  updateNotif(notif:Notif): Observable<Object> { 
    return this.http.put<Notif>(`${this.baseUrl}/updateNotif/${notif.id}`, notif);
  }
  deleteNotif(id: number): Observable<Notif> { 
    return this.http.delete<Notif>(`${this.baseUrl}/deleteNotif/${id}`);
  }
}