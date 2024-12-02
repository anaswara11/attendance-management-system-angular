import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../Taches';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = "http://localhost:8080/api/taches";
  constructor(private http: HttpClient) { }
 
  
  getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.apiUrl)
  }
  getTacheById(id : number): Observable<Tache>{
    return this.http.get<Tache>(`${this.apiUrl}/${id}`);
   }

   updateTache(id : number, tache: Tache): Observable<Tache>{
    return this.http.put(`${this.apiUrl}/${id}`, tache,httpOptions);
    
  }

  addTache(tache: Tache,id:number): Observable<Tache>{
    return this.http.post<Tache>(`${this.apiUrl}/${id}`,tache)
   }

   deleteTache(id : String): Observable<Tache>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
