import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { List, UserFull, UserPreview } from '../models/user.model';
import { Users_servService} from '../services/users-serv.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { timer, interval } from 'rxjs';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  counter1 = 0 ;

  [x: string]: any;

  showIt = true ;
  backPath : any;
  previousUrl = '' ;
  baseURL = 'https://dummyapi.io/data/v1';

    // services :
  view!: List<UserPreview>;
  viewid!: UserFull;
  c = 300;
  countF!: string;
  countL!: string;
  countEmail!: string;
  countID! : string;
  countPic! : string;
  countTitle!: string;

  cond = 'details';
  usersPath = '/usersPage';
  detailsPath = '/UsersDetailsPage';

  createpath = '/create';
  updatepath = '/update';
  reactiveupdatepath = '/updateReactive';

  curID = ' ' ;

 //form
 titles: string[] = ['mrs', 'mr','dr','prof','miss'];
  model: UserPreview = {
    id: ' ',
    firstName: ' ',
    lastName: '',
    picture: '',
    email: '',
    title:' ',
  };

// private router: Route
constructor( private router: Router, private activatedRoute: ActivatedRoute, private location: Location ,private User_servService: Users_servService,private http: HttpClient ) { }

ngOnInit(): void {
  this.getUsers();
}

onSubmit(): void {
  console.log(this.model);
}
add(): void {
  //this.router.navigateByUrl('/create') ; //, { relativeTo: this.activatedRoute }
  console.log('adding manually');
  this.cond = 'add';
}
toPost() : void {
    this.cond = 'post' ;
    console.log ( ' Users post page ' );
  }
  reactiveform() : void {
    this.cond = 'reactiveform' ;
    console.log ( ' reactive form ' );
    // this.router.navigate(['reactiveform']);
  }
  reactiveupdate(data : UserPreview ) : void {
    this.cond = 'reactiveupdate' ;
    console.log ( data,' update reactive form ' );
  }
  toDetails() : void {
    // this.router.navigate(['UsersDetailsPage']);
    this.cond = 'details' ;
    console.log ( ' Users Details Page ' )
  }
  toEdit(id: string ) : void {
    // this.router.navigate(['UsersDetailsPage']);
    this.cond = 'edit' ;
    console.log ( ' edit  Page ' );
    this.curID = id ;
  }

  showUsers() : any {
    console.log ( ' Show users in users ' );
    this.showIt = true ;
  }

  goBack () : void {
    this.location.back();
    this.backPath = this.location.path() ;
    this.location.go(this.backPath);
    console.log ( 'path ' , this.backPath);
  }

// service functions
getUsers() : void {
    this.User_servService.getUsers().subscribe((response: any) => {
        console.log(response);
        this.view = response
   });
}
getUserId(id: string): void {
  this.User_servService.getUserId(id).subscribe(response => {
    console.log(response);
    this.viewid = response;
    this.getUsers;
  });
  this.cond = 'id';
}
createUser(): void {
this.c++; console.log(this.c);
this.countF = "first" + this.c;
this.countL = "last" + this.c;
this.countEmail =  "first" + this.c + "@gmail.com";
this.countPic = 'hh';//"https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" ;
this.countTitle = this.titles[0] ;
this.User_servService.createUser({ firstName: this.countF, lastName: this.countL ,
  email:this.countEmail, picture: this.countPic ,  title : this.titles[0] , id : this.countID })
  .subscribe({
    next: response => {
      console.log(response),
        this.getUsers()
    },
    error: (err) => console.log('Error Occurred (subscribe):', err),
  });
}
addUser(): void {
  this.c++; console.log(this.c);
  this.countF = this.model.firstName;
  this.countL = this.model.lastName ;
  this.countEmail = this.model.firstName + "@gmail.com"; // Temp
  this.countID = this.model.id ;
  this.countPic = this.model.picture ;
  this.countTitle = this.model.title ;
  this.User_servService.createUser({ firstName: this.countF,
   lastName: this.countL, email: this.countEmail,
      picture: this.countPic, title : this.countTitle , id : this.countID })

    .subscribe({
      next: response => {
        alert('User Info Succesfully Added '),
        setTimeout(this.toDetails ,2000)
      },
      error: (err) => alert('Error Occurred (subscribe):  ' +  err + '  Email already used ' ), // Temporary
    });
  }
updateUser(id: string): void {

  const newAccount = {
  firstName: this.model.firstName,
  lastName: this.model.lastName ,
  title: this.model.title,
};
this.User_servService.updateUser(id, newAccount).subscribe(response => {
  console.log(response),
    this.getUsers()
    this.getUserId(id)
});
alert('User Info Succesfully Updated ');
setTimeout(this.toDetails ,2000); // after two seconds it will go to users page

}
deleteUser(id: string) : void{
this.User_servService.deleteUser(id).subscribe(response => {
  console.log(response),
    this.getUsers()
});
}
}

