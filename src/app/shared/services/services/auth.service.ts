import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { Session } from '../../models/session';

export enum AuthConstant {
  tokenLocalName = 'token',
  sessionLocalName = 'userSession',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private apiUrlUser = 'http://localhost:5000/api/user';
  private apiUrlProject = 'http://localhost:5000/api/stuff';

  private userSubject!: BehaviorSubject<any>;
  private currentUser!: Observable<any>;

  constructor(private http: HttpClient) {
    const session = this.getSessionAsObject();
    this.userSubject = new BehaviorSubject<any>(session ? session.user : null);
    this.currentUser = this.userSubject.asObservable();
  }

  registerUser(userData: User): Observable<any> {
    const newUser: User = userData;
    newUser.createdAt = new Date();
    return this.http.post(`${this.apiUrl}/signup`, newUser).pipe(
      tap((res: any) => {
        //console.log(res);

        const session = res as Session;
        this.finalizeAuthentification(session);
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        return throwError(error);
      })
    );
  }

  loginUser(userData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData).pipe(
      tap((res: any) => {
        const session = res as Session;
        this.finalizeAuthentification(session);
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        return throwError(error);
      })
    );
  }

  modifyUser(user: User) {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // const modifiedUser = { ...user, userId: user.userId };

    return this.http
      .put(`${this.apiUrlUser}/${user._id}`, user, { headers })
      .pipe(
        tap((res) => {
          this.finalizeAuthentification(res as Session);
        }),
        catchError((error) => {
          console.error('Registration error:', error);
          return throwError(error);
        })
      );
  }

  finalizeAuthentification(session: Session) {
    this.saveToken(session.token);
    this.saveSession(session);
  }

  saveToken(token: string) {
    localStorage.setItem(AuthConstant.tokenLocalName, token);
  }

  getToken() {
    return localStorage.getItem(AuthConstant.tokenLocalName);
  }

  getSession() {
    return localStorage.getItem(AuthConstant.sessionLocalName);
  }

  isLogedIn() {
    return Boolean(this.getSession());
  }

  saveSession(session: Session) {
    localStorage.setItem(
      AuthConstant.sessionLocalName,
      JSON.stringify(session)
    );
    this.userSubject.next(session.user); // Update the userSubject with the new user data
  }

  getSessionAsObject() {
    const session = localStorage.getItem(AuthConstant.sessionLocalName);
    if (session) {
      return JSON.parse(session);
    }
    return null;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  cleanAuthData() {
    localStorage.removeItem(AuthConstant.sessionLocalName);
    this.userSubject.next(null); // Update the userSubject to null

    const session = localStorage.getItem(AuthConstant.sessionLocalName);
    const isClean = !session;
    return of(isClean);
  }
}
