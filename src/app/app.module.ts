import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from 'src/services/country.service';
import { StorageService } from 'src/services/storage.service';

import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';
import { Home } from './pages/home/home.component';
import { FilterPipe } from './pages/home/filter.pipe';
import { Country } from './pages/country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    FilterPipe,
    Country,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [StorageService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
