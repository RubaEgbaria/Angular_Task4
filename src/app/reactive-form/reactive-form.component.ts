import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { List, UserFull, UserPreview } from '../models/user.model';
import { Users_servService } from '../services/users-serv.service';
import { identityRevealedValidator } from './validators.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 //form
 titles: string[] = ['mrs', 'mr','dr','prof','miss'];
 userForm = new FormGroup ({
  id        : new FormControl (),
  firstName : new FormControl ( '' , [Validators.required, Validators.minLength(2)]),
  lastName  : new FormControl ( '' , [Validators.required, Validators.minLength(2)]),
  email     : new FormControl ( '' , [Validators.required, Validators.minLength(2), Validators.email]),
  title     : new FormControl ( '' , [Validators.required]),
  picture   : new FormControl (),
 }, { validators: identityRevealedValidator
});

// this.userForm.value.first
 // Servics

     view!: List<UserPreview>;
     viewid!: UserFull;
     c = 300;
     countF!: string;
     countL!: string;
     countEmail!: string;
     countID! : string;
     countPic! : string;
     countTitle!: string;

    value : UserPreview = {
      id: ' ',
      firstName: ' ',
      lastName: '',
      picture: '',
      email: '',
      title:' ',
    };
     constructor(private router: Router, private activatedRoute: ActivatedRoute,private User_servService: Users_servService,private http: HttpClient ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
      console.log(this.userForm.value);
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
  this.countID = this.userForm.value.id ;
  this.countPic = this.userForm.value.picture ;
  this.countTitle =  this.userForm.value.title + '';

  this.User_servService.createUser({ firstName: this.countF,
   lastName: this.countL, email: this.countEmail,
      picture: this.countPic, title : this.countTitle , id : this.countID })

    .subscribe({
      next: response => {
        alert('User Info Succesfully Added ')
        // setTimeout(this.toDetails ,2000)
      },
      error: (err) => alert('Error Occurred (subscribe):  ' +  err + '  Email already used ' ),


    });

  // this.User_servService.createUser({
  //   firstName: this.firstName.toString(),
  //   lastName:  this.lastName.toString(),
  //   email: '@gmail.com',
  //   picture: this.picture.toString(),
  //   title : this.title.toString() ,
  //   id : this.id.toString() })

  //   // this.User_servService.createUser({
  //   //   firstName: this.firstName.toString(),
  //   //   lastName:  this.lastName.toString(),
  //   //   email: this.email.toString(),
  //   //   picture: this.picture.toString(),
  //   //   title : this.title.toString() ,
  //   //   id : this.id.toString() })

  //   .subscribe({
  //     next: (response) => {
  //       alert('User Info Succesfully Added ')
  //       // setTimeout(this.toDetails ,2000)
  //     },
  //     error: (err) => alert('Error Occurred (subscribe):  ' +  err + '  Email already used ' ),


  //   });
  }
}
// function forbiddenNameValidator(arg0: string): import("@angular/forms").ValidatorFn {
//   throw new Error('Function not implemented.');
// }

