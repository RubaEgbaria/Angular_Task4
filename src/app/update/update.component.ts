import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { List, UserFull, UserPreview } from '../models/user.model';
import { Users_servService } from '../services/users-serv.service';
import { forbiddenNameValidator, identityRevealedValidator } from '../reactive-form/validators.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 //form
 titles: string[] = ['mrs', 'mr','dr','prof','miss'];
 userForm = new FormGroup ({
  id        : new FormControl (),
  firstName : new FormControl ( '' , [Validators.required, Validators.minLength(2)]),
  lastName  : new FormControl ( '' , [Validators.required, Validators.minLength(2)]),
  email     : new FormControl ( '' , [Validators.required, Validators.minLength(2), Validators.email]),
  title     : new FormControl ( '' , [Validators.required]),
  picture   : new FormControl (),
}, { validators: identityRevealedValidator });

 // Servics

     view!: List<UserPreview>;
     viewid!: UserFull;
     c = 100;
     countF!: string;
     countL!: string;
     countEmail!: string;
     countID! : string;
     countPic! : string;
     countTitle!: string;

     curID =  '';
     IDs = [] ;
    value: UserPreview = {
      id: ' ',
      firstName: ' ',
      lastName: '',
      picture: '',
      email: '',
      title:' ',
    };
    data = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private User_servService: Users_servService,private http: HttpClient ) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
      console.log(this.userForm.value);
  }
  getURL (): string {
    this.userForm.controls.id.disable();
 //   console.log(this.router.url.substring(16));
    return this.router.url.substring(16,40);
}

  get id() {
    return this.userForm.controls.id;
  }
  get firstName() {
      return this.userForm.controls.firstName;
  }
  get lastName() {
    return this.userForm.controls.lastName;
  }
  get email() {
    return this.userForm.controls.email;
  }
  get title() {
      return this.userForm.controls.title;
  }
  get picture() {
    return this.userForm.controls.picture ;
  }
  addUser(): void {

    this.c++; console.log(this.c);
    this.countF = this.userForm.value.firstName + '';
    this.countL = this.userForm.value.lastName  + '';
    this.countEmail = this.userForm.value.email + '';
    this.countID = this.getURL() ;
    this.countPic = this.userForm.value.picture ;
    this.countTitle =  this.userForm.value.title + '';

    this.User_servService.createUser({ firstName: this.countF,
     lastName: this.countL, email: this.countEmail,
        picture: this.countPic, title : this.countTitle , id : this.getURL() })

      .subscribe({
        next: response => {
          alert('User Info Succesfully Added ')
          // setTimeout(this.toDetails ,2000)
        },
        error: (err) => alert('Error Occurred (subscribe):  ' +  err + '  Email already used ' ),


      });
    }
    updateUser(id: string): void {

      const newAccount = {
      firstName: this.userForm.value.firstName + '',
      lastName: this.userForm.value.lastName + '',
      title: this.userForm.value.title + '',
      id: this.getURL() ,
      pictue: this.userForm.value.picture ,
    };
    this.User_servService.updateUser(id, newAccount).subscribe(response => {
      console.log(response),
        this.getUsers()
        this.getUserId(id)
    });
    alert('User Info Succesfully Updated ');

    }
    // service functions
getUsers() : void {
  this.User_servService.getUsers().subscribe((response: any) => {
      console.log(response);
      this.view = response
 });
}
getUserId(id: string): any {
this.User_servService.getUserId(id).subscribe(response => {
 // console.log(response , ' in get user id ');
  this.viewid = response;
  this.getUsers;
});
return this.viewid ;
}
getname () : string {
  this.data = this.getUserId(this.getURL());
  return this.data ;
}
}
