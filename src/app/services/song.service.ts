import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = "https://localhost:7185/api"

  constructor(private http: HttpClient) { }

  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/Song")
      .pipe(
        catchError(this.handleError)
      );
  }

  getSignleSongs(id): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Song/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return [];
  }
}
