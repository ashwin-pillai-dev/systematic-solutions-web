import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './home/coming-soon/coming-soon.component';
// import { BlogModule } from './blog/blog.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: '', component:HomeComponent},
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(b => b.BlogModule) },
  { path: 'company', loadChildren: () => import('./company/company.module').then(c => c.CompanyModule) },
  { path: '**', component:ComingSoonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
