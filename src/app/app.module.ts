import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconComponentComponent } from './header/icon-component/icon-component.component';
import { IconSearchComponent } from './header/icon-search/icon-search.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { BookComponent } from './my-library/book/book.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from './footer/footer.component';
import { EditorialComponent } from './footer/editorial/editorial.component';
import { UsefulLinksComponent } from './footer/useful-links/useful-links.component';
import { CompanyComponent } from './footer/company/company.component';
import { BigideasComponent } from './footer/bigideas/bigideas.component';
import { HttpClientModule } from '@angular/common/http';
import { ExplorenavComponent } from './explorenav/explorenav.component';
import { NavComponent } from './explorenav/nav/nav.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';


@NgModule({
  declarations: [
    AppComponent,
    IconComponentComponent,
    HeaderComponent,
    IconSearchComponent,
    MyLibraryComponent,
    BookComponent,
    FilterPipe,
    FooterComponent,
    EditorialComponent,
    UsefulLinksComponent,
    CompanyComponent,
    BigideasComponent,
    ExplorenavComponent,
    NavComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressBarModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
