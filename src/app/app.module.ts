import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NotifListComponent } from './components/notif-list/notif-list.component';
import { NotifCreateComponent } from './components/notif-create/notif-create.component';
import { NotifUpdateComponent } from './components/notif-update/notif-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifListComponent,
    NotifCreateComponent,
    NotifUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
