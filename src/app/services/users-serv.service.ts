import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { CreateUserModel, List, UserPreview, UserFull } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class Users_servService {
  baseURL = 'https://dummyapi.io/data/v1';
  options = {
      headers: new HttpHeaders().set('app-id','62c3682893bd3fb09edcb152')
  };

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<List<UserPreview>> {
  //     return this.http.get<List<UserPreview>>(`${this.baseURL}/user`, { ...this.options,
  //         params: new HttpParams({ fromString: 'id=3' })});
  // }

  getUsers(): Observable<List<UserPreview>> {
      return this.http.get<List<UserPreview>>(`${this.baseURL}/user`, {
        ...this.options
        ,
        params: { created: 1 }
      });
  }
  getUserId(id: string): Observable<UserFull> {
      return this.http.get<UserFull>(`${this.baseURL}/user/${id}`, {
        ...this.options
      });
  }
  createUser(payload: UserPreview): Observable<UserFull> {
      return this.http.post<UserFull>(`${this.baseURL}/user/create`, payload, this.options).pipe(
          //retry(3),
          catchError(this.handleError),
      );
  }

  deleteUser(id: string): Observable<any> {
      return this.http.delete<any>(`${this.baseURL}/user/${id}`, this.options);
  }
    updateUser(id: string, newUser: any): Observable<UserFull> {
      return this.http.put<UserFull>(`${this.baseURL}/user/${id}`, newUser, this.options);
  }
    fullUser(id: string): Observable<List<UserFull>> {
      return this.http.get<List<UserFull>>(`${this.baseURL}/user/${id}`, {
        ...this.options
      });
    }
  handleError(error: HttpErrorResponse): Observable<never> {
      console.log('Inside handleError():', error);
      return throwError('some error occurred');
  }
}
