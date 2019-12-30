import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content' },
  { path: 'content', component: ContentComponent },
  {path:'auth' ,
    loadChildren:'./authentication/authentication.module#AuthenticationModule'   
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
