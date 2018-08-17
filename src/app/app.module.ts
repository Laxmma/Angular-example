import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { AppComponent } from './app.component';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ComponentsTemplatesModule,
    RxDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
