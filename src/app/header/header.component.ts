import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    userSub: User;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

    ngOnInit(): void {
        console.log("eae");
        this.authService.user.subscribe(user => {
            console.log(!user);
            console.log(!!user);
            this.isAuthenticated = !!user;
        });
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}