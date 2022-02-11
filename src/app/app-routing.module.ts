import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'products',component:ProductsComponent,children: [
    {
      path: 'ProductsWithDiscount',
      component: ProductsWithDiscountComponent,
    },
    {
      path: 'ProductsWithoutDiscount',
      component: ProductsWithoutDiscountComponent,
    },
  ],},
  {path:'posts',component:PostsComponent},
  {path:'users',component:UsersComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'notes',component:NotesComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
