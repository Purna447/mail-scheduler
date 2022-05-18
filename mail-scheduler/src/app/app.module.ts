import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailSchedularBarComponent } from './mail-schedular-bar/mail-schedular-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { SendMailBarComponent } from './send-mail-bar/send-mail-bar.component';
import { ScheduleorsentComponent } from './scheduleorsent/scheduleorsent.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {MatInputModule}  from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http'; 




@NgModule({
  declarations: [
    AppComponent,
    MailSchedularBarComponent,
    LoginComponent,
    RegisterComponent,
    SendMailBarComponent,
    ScheduleorsentComponent,
    DialogboxComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
