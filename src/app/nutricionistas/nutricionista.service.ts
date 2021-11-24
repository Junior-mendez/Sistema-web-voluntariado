import { Injectable } from '@angular/core';
import {NUTRICIONISTAS} from './nutricionistas.json';
import {Nutricionista} from './nutricionista';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {

  constructor() { }

  getNutricionistas(): Observable<Nutricionista[]>{return of (NUTRICIONISTAS);}
}

/*
export class UserService {
  private url:string = 'http://localhost:8087/api/users'
  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>
  {
    return this.http.get(this.url).pipe(
      map(response => response as User[])
    );
  }
  create(user:User):Observable<User>{
    return this.http.post<User>(
      this.url,user,{headers: this.httpHeaders}
    )
  }
  getUser(id):Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }
  update(user:User):Observable<User>{
    return this.http.put<User>(
      `${this.url}/${user.id}`,
      user,
      {headers: this.httpHeaders}
    )
  }
  delete(id:number):Observable<User>{
    return this.http.delete<User>(
      `${this.url}/${id}`,
      {headers: this.httpHeaders}
    )
  }
}*/