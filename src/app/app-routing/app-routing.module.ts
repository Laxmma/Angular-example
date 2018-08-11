import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from '../index/index.component';
import { DisplayDataInTemplateComponent } from '../components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from '../components-templates/display-data-in-template-url/display-data-in-template-url.component';

const appRoutes: Routes = [
  { path: 'index', component:  IndexComponent},
  { path: 'components-templates/display-data-in-template', component:  DisplayDataInTemplateComponent},
  { path: 'components-templates/display-data-in-template-url', component:  DisplayDataInTemplateUrlComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [PageNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
