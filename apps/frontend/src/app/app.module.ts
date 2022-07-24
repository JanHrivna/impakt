import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { IconsModule } from './modules/icons/icons.module';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { VzorekModalComponent } from './components/vzorek-modal/vzorek-modal.component';
import { VzorekFormComponent } from './components/vzorek-form/vzorek-form.component';
import { AnalyzyFormComponent } from './components/vzorek-modal/analyzy-form/analyzy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    VzorekModalComponent,
    ConfirmModalComponent,
    VzorekFormComponent,
    AnalyzyFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
