import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService{
    
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2r6C24dB4pf-c9xViRZwHX82ppj_PbcE";

    constructor(private http: HttpClient){}

    signup(email: string , password: string){
        return this.http.post<AuthResponseData>(this.baseUrl, 
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            );
    }
}