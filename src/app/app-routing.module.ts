import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
{ path: 'homePage', component: HomepageComponent },
{ path: 'UsersDetailsPage', component: UsersComponent  },
{ path: 'aboutPage', component: AboutComponent },
{ path: 'reactiveform', component: ReactiveFormComponent},
{ path: 'updateReactive', component: UpdateComponent, pathMatch: 'prefix'},
{ path: 'updateReactive' + '**', component: UpdateComponent, pathMatch: 'prefix'},


{ path: 'usersPage', component: UsersComponent },
{ path: 'create', component: UsersComponent },
{ path: 'update', component: UsersComponent },

{ path: '', redirectTo: 'homePage', pathMatch: 'full' },
{ path: '**', component: UpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
