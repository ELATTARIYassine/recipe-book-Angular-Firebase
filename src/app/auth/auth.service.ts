import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';


interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService{   

    user = new Subject<User>();
    
    signUp: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2r6C24dB4pf-c9xViRZwHX82ppj_PbcE";
    loginUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2r6C24dB4pf-c9xViRZwHX82ppj_PbcE";

    constructor(private http: HttpClient){}

    signup(email: string , password: string){
        return this.http.post<AuthResponseData>(this.signUp, 
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            ).pipe(tap(res => {
                const expirationDate = new Date(new Date().getTime() + +res.expiresIn * 1000)
                const user = new User(res.email, res.localId, res.idToken, expirationDate);
                this.user.next(user);
            }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(this.loginUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(res => {
            const expirationDate = new Date(new Date().getTime() + +res.expiresIn * 1000)
            const user = new User(res.email, res.localId, res.idToken, expirationDate);
            this.user.next(user);
        }));
    }
}