import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVzorekModalComponent } from './components/create-vzorek-modal/create-vzorek-modal.component';
import { OverviewComponent } from './components/overview/overview.component';
import { IconsModule } from './modules/icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateVzorekModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
