import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    },),
    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
