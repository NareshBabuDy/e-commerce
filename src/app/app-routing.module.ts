import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './common/auth.guard';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
