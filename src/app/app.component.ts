import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
  cond = 'home';


  homePath = '/homePage';
  usersPath = '/usersPage';
  aboutPath = '/aboutPage';
  detailsPath = '/UsersDetailsPage';

  constructor(private router: Router) { }
  // Functions to move between pages :
   // Routing :
  toUsers() : void {
    this.router.navigate(['UsersDetailsPage']);
    this.cond = 'users' ;
    console.log ( ' Users page ' );
  }
  toDetails() : void {
    this.router.navigate(['UsersDetailsPage']);
    this.cond = 'details' ;
    console.log ( ' Users Details Page ' );
  }
  toHome() : void {
    this.router.navigate(['homePage']);
    console.log ( ' Home page  ' );
    this.cond = 'home' ;
  }
  toAbout() : void {
    this.router.navigate(['aboutPage']);
    console.log ( ' About page  ' );
    this.cond = 'about' ;
  }
}
