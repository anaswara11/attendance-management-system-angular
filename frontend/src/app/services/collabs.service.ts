import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Collab } from '../Collabs';


@Injectable({
  providedIn: 'root'
})
export class CollabsService {
  private apiUrl = "http://localhost:8080/api/collabs";
  constructor(private http: HttpClient) { }
  success:string='';
  state:string='fade';
  type:string='success';

  setSuccess(data:string){
        this.success=data;
        this.state="";
  }

  setStateType(state:string,type:string){
        this.state=state;
        this.type=type;
  }
  getType(){
    return this.type;
  }
 
  getSuccess(){
    return this.success;
  }
  getState(){
    return this.state;
  }
  
  getCollabs(): Observable<Collab[]> {
    return this.http.get<Collab[]>(this.apiUrl)
  }
  addCollab(collab: Collab): Observable<Collab>{
   return this.http.post<Collab>(this.apiUrl,collab)
  }

  getCollabByMatr(matr : string): Observable<Collab>{
    return this.http.get<Collab>(`${this.apiUrl}/${matr}`);
   }
   
  updateCollab(matr : string, collab: Collab): Observable<Collab>{
    return this.http.put(`${this.apiUrl}/${matr}`, collab);
  }
  deleteCollab(matr : string): Observable<Collab>{
    return this.http.delete(`${this.apiUrl}/${matr}`);
  }
   


}
