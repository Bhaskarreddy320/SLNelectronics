import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/AuthGuard';


const appRoutes: Routes = [
  {path:'', component: HomeComponent}, 
  {path:'admin', component: DashboardComponent, canActivate:[AuthGuardService]},
  {path:'signin', component: SigninComponent},
  
   
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,    
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
